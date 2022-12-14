---
sidebar_position: 2
---

# Aptos Analytics and GraphQL

Raw blockchain data can be difficult for developers to work with for a number of reasons.

1. It is often stored in a proprietary format that is not easily accessible or readable by external systems or tools.
2. It can be voluminous and complex, making it difficult to extract and analyze the specific information that is needed for a particular application or use case
3. It may be distributed across multiple nodes in the blockchain network, requiring developers to devise complex strategies for accessing and integrating the data from multiple sources

BlockEden.xyz solves this by indexing blockchain data in real-time and presents the result to you with an analytics web portal and indexer GraphQL.

![How BlockEden.xyz Analytics and GraphQL works?](https://tp-misc.b-cdn.net/blockeden/Analytics-and-GraphQL@2x.png "How BlockEden.xyz Analytics and GraphQL works?")



## Analytics web portal

BlockEden.xyz Analytics is a metabase web portal for exploring and analyzing blockchain data. It allows users to easily query, visualize, and share data from Aptos and Sui blockchains.

Quick start

* [Inspect all data tables](https://blockeden.xyz/analytics/browse/2/schema/public)
* [Write a SQL query](https://blockeden.xyz/analytics/question)
* [Public Exemplary Dashboard](https://blockeden.xyz/analytics/public/dashboard/8aebd278-8f33-43ea-95f3-8baf3ecab5cf)

### SQL examples

[Aptos User Tx Per Day](https://blockeden.xyz/analytics/question/2-aptos-user-tx-per-day)

```sql
select date(timestamp) as date, count(*) as user_tx_count from user_transactions group by 1;
```

[Aptos NFT swap volume last 14 days](https://blockeden.xyz/analytics/question/11-aptos-nft-swap-volume-last-14-days)

```sql
SELECT date(inserted_at) AS date,
       sum(((DATA #>> '{coin_amount}')::bigint / pow(10, 8))) AS coin_amount
FROM EVENTS
WHERE TYPE like '%::token_coin_swap::TokenSwapEvent'
  AND inserted_at BETWEEN NOW() - INTERVAL '14 DAYS' AND NOW()
GROUP BY 1;
```



## Indexer GraphQL

GraphQL is a query language and runtime for building APIs that allows clients to request and receive only the data they need, in a predictable and flexible format. It provides a way for clients to specify the shape of the data they need, and for the server to describe the data it can provide, enabling more efficient and flexible communication between the client and the server. GraphQL is often used as an alternative to REST APIs, and is particularly well-suited for modern, data-driven applications that need to be flexible and easily extended.

You may [create an api key at the dashboard](https://blockeden.xyz/dash/) to get transaction, block, coin, NFT, and events data from our GraphQL API.



## Indexer database schema

[//]: # (aptos-core/crates/indexer/src/schema.rs)

### [block_metadata_transactions](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjMzfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)

| Field                       | Type | Description                                                  |
|-----------------------------| ---- |--------------------------------------------------------------|
| **version**                 | Int8 | A version is the sequence id of a transaction. |
| block_height                |  Int8|  |
| id                          |  Varchar|                                                              |
| round                       |  Int8| A round consists of achieving consensus on a block of transactions and their execution results. |
| epoch                       |  Int8| An epoch is a fixed duration of time, currently defined as two hours on mainnet. |
| previous_block_votes_bitvec |  Jsonb|                                                              |
| proposer                    |  Varchar|  |
| failed_proposer_indices     |  Jsonb|                                                              |
| timestamp                   |  Timestamp| Timestamp is the machine timestamp of when the block is committed. |
| inserted_at                 |  Timestamp| inserted_at is when the row is inserted into the database. |

### [coin_activities](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjEyfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)

The `coin_activities` table contains all the coin transfter activity history.

| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**event_account_address** |  Varchar|  |
|**event_creation_number** |  Int8|  |
|**event_sequence_number** |  Int8|  |
|owner_address |  Varchar|  |
|coin_type |  Varchar| Coin type or symbol. [Get all registered coin types](https://github.com/trustwallet/assets/tree/master/blockchains/aptos). |
|amount |  Numeric|  |
|activity_type |  Varchar| `0x1::coin::DepositEvent`, `0x1::aptos_coin::GasFeeEvent,` `0x1::coin::WithdrawEvent` |
|is_gas_fee |  Bool|  |
|is_transaction_success |  Bool|  |
|entry_function_id_str | `Nullable<Varchar>` |  |
|block_height |  Int8|  |
|transaction_timestamp |  Timestamp| when is the transaction minted |
|inserted_at |  Timestamp|  |

Example

List 10 most recent USDC coin activities for deposits into a specific address after a date.

Query:

```gql
query CoinActivities($owner_address: String, $limit: Int, $offset: Int, $coin_type: String, $after_at: timestamp) {
  coin_activities(
    where: {owner_address: {_eq: $owner_address}, activity_type: {_eq: "0x1::coin::DepositEvent"}, coin_type: {_eq: $coin_type}, transaction_timestamp: {_gte: $after_at}}
    order_by: {transaction_version: desc}
    limit: $limit
    offset: $offset
  ) {
    inserted_at
    activity_type
    amount
    block_height
    coin_type
    entry_function_id_str
    event_account_address
    event_creation_number
    event_sequence_number
    is_gas_fee
    is_transaction_success
    owner_address
    transaction_timestamp
    transaction_version
  }
}
```

Variables:

```json
{
  "owner_address": "0x8304621d9c0f6f20b3b5d1bcf44def4ac5c8bf7c11a1ce80b53778532396312b",
  "limit": 10,
  "offset": 0,
  "coin_type": "0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T",
  "after_at": "2021-01-07T19:15:58.268388"
}
```


### [coin_balances](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjI3fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)

| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**owner_address** |  Varchar|  |
|**coin_type_hash** |  Varchar|  |
|coin_type |  Varchar|  |
|amount |  Numeric|  |
|transaction_timestamp |  Timestamp|  |
|inserted_at |  Timestamp|  |


### [coin_infos](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjQ1fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**coin_type_hash** |  Varchar|  |
|coin_type |  Varchar|  |
|transaction_version_created |  Int8|  |
|creator_address |  Varchar|  |
|name |  Varchar|  |
|symbol |  Varchar|  |
|decimals |  Int4|  |
|transaction_created_timestamp |  Timestamp|  |
|inserted_at |  Timestamp|  |
|supply_aggregator_table_handle | `Nullable<Varchar>` |  |
|supply_aggregator_table_key | `Nullable<Text>` |  |


### [coin_supply](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjQyfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**coin_type_hash** |  Varchar|  |
|coin_type |  Varchar|  |
|supply |  Numeric|  |
|transaction_timestamp |  Timestamp|  |
|transaction_epoch |  Int8|  |
|inserted_at |  Timestamp|  |




### [collection_datas](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjIxfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**collection_data_id_hash** |  Varchar|  |
|**transaction_version** |  Int8|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|description |  Text|  |
|metadata_uri |  Varchar|  |
|supply |  Numeric|  |
|maximum |  Numeric|  |
|maximum_mutable |  Bool|  |
|uri_mutable |  Bool|  |
|description_mutable |  Bool|  |
|inserted_at |  Timestamp|  |
|table_handle |  Varchar|  |
|transaction_timestamp |  Timestamp|  |


### [current_ans_lookup](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjV9LCJ0eXBlIjoicXVlcnkifSwiZGlzcGxheSI6InRhYmxlIiwidmlzdWFsaXphdGlvbl9zZXR0aW5ncyI6e319)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**domain** |  Varchar|  |
|**subdomain** |  Varchar|  |
|registered_address | `Nullable<Varchar>` |  |
|expiration_timestamp |  Timestamp|  |
|last_transaction_version |  Int8|  |
|inserted_at |  Timestamp|  |


### [current_coin_balances](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjI5fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**owner_address** |  Varchar|  |
|**coin_type_hash** |  Varchar|  |
|coin_type |  Varchar|  |
|amount |  Numeric|  |
|last_transaction_version |  Int8|  |
|last_transaction_timestamp |  Timestamp|  |
|inserted_at |  Timestamp|  |


### current_collection_datas
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**collection_data_id_hash** |  Varchar|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|description |  Text|  |
|metadata_uri |  Varchar|  |
|supply |  Numeric|  |
|maximum |  Numeric|  |
|maximum_mutable |  Bool|  |
|uri_mutable |  Bool|  |
|description_mutable |  Bool|  |
|last_transaction_version |  Int8|  |
|inserted_at |  Timestamp|  |
|table_handle |  Varchar|  |
|last_transaction_timestamp |  Timestamp|  |


### [current_staking_pool_voter](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjM0fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**staking_pool_address** |  Varchar|  |
|voter_address |  Varchar|  |
|last_transaction_version |  Int8|  |
|inserted_at |  Timestamp|  |


### [current_token_datas](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjQ2fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**token_data_id_hash** |  Varchar|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|name |  Varchar|  |
|maximum |  Numeric|  |
|supply |  Numeric|  |
|largest_property_version |  Numeric|  |
|metadata_uri |  Varchar|  |
|payee_address |  Varchar|  |
|royalty_points_numerator |  Numeric|  |
|royalty_points_denominator |  Numeric|  |
|maximum_mutable |  Bool|  |
|uri_mutable |  Bool|  |
|description_mutable |  Bool|  |
|properties_mutable |  Bool|  |
|royalty_mutable |  Bool|  |
|default_properties |  Jsonb|  |
|last_transaction_version |  Int8|  |
|inserted_at |  Timestamp|  |
|collection_data_id_hash |  Varchar|  |
|last_transaction_timestamp |  Timestamp|  |
|description |  Text|  |


### [current_token_ownerships](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjMyfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**token_data_id_hash** |  Varchar|  |
|**property_version** |  Numeric|  |
|**owner_address** |  Varchar|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|name |  Varchar|  |
|amount |  Numeric|  |
|token_properties |  Jsonb|  |
|last_transaction_version |  Int8|  |
|inserted_at |  Timestamp|  |
|collection_data_id_hash |  Varchar|  |
|table_type |  Text|  |
|last_transaction_timestamp |  Timestamp|  |


### [current_token_pending_claims](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjMxfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**token_data_id_hash** |  Varchar|  |
|**property_version** |  Numeric|  |
|**from_address** |  Varchar|  |
|**to_address** |  Varchar|  |
|collection_data_id_hash |  Varchar|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|name |  Varchar|  |
|amount |  Numeric|  |
|table_handle |  Varchar|  |
|last_transaction_version |  Int8|  |
|inserted_at |  Timestamp|  |
|last_transaction_timestamp |  Timestamp|  |


### [events](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjM4fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**sequence_number** |  Int8|  |
|**creation_number** |  Int8|  |
|**account_address** |  Varchar|  |
|transaction_version |  Int8|  |
|transaction_block_height |  Int8|  |
|#[sql_name = "type"]|||
|type_ |  Text|  |
|data |  Jsonb|  |
|inserted_at |  Timestamp|  |




### [indexer_status](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjQ0fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**db** |  Varchar|  |
|is_indexer_up |  Bool|  |
|inserted_at |  Timestamp|  |




### [ledger_infos](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjE1fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**chain_id** |  Int8|  |




### [move_modules](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjE3fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**write_set_change_index** |  Int8|  |
|transaction_block_height |  Int8|  |
|name |  Text|  |
|address |  Varchar|  |
|bytecode |  `Nullable<Bytea>`|  |
|friends | `Nullable<Jsonb>` |  |
|exposed_functions | `Nullable<Jsonb>` |  |
|structs | `Nullable<Jsonb>` |  |
|is_deleted |  Bool|  |
|inserted_at |  Timestamp|  |




### [move_resources](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjEzfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**write_set_change_index** |  Int8|  |
|transaction_block_height |  Int8|  |
|name |  Text|  |
|address |  Varchar|  |
|#[sql_name = "type"]|||
|type_ |  Text|  |
|module |  Text|  |
|generic_type_params | `Nullable<Jsonb>` |  |
|data | `Nullable<Jsonb>` |  |
|is_deleted |  Bool|  |
|inserted_at |  Timestamp|  |

Examples

List all the move resources for a specific account by address, time and type.

Query:

```gql
query AccountTransactionsData($address: String, $limit: Int, $offset: Int, $after_at: timestamp, $type: String) {
  move_resources(
    where: {address: {_eq: $address}, inserted_at: {_gte: $after_at}, type: {_eq: $type}}
    order_by: {transaction_version: desc}
    distinct_on: transaction_version
    limit: $limit
    offset: $offset
  ) {
    type
    transaction_version
    data
    inserted_at
  }
}
```

Variables:

```json
{
  "address": "0x8304621d9c0f6f20b3b5d1bcf44def4ac5c8bf7c11a1ce80b53778532396312b",
  "limit": 100,
  "offset": 0,
  "after_at": "2022-01-07T19:15:58.268388",
  "type": "0x1::coin::CoinStore<0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T>"
}
```


### [processor_status](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjI0fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**processor** |  Varchar|  |
|last_success_version |  Int8|  |
|last_updated |  Timestamp|  |




### [processor_statuses](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjE5fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**name** |  Varchar|  |
|**version** |  Int8|  |
|success |  Bool|  |
|details | `Nullable<Text>` |  |
|last_updated |  Timestamp|  |




### [signatures](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjd9LCJ0eXBlIjoicXVlcnkifSwiZGlzcGxheSI6InRhYmxlIiwidmlzdWFsaXphdGlvbl9zZXR0aW5ncyI6e319)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**multi_agent_index** |  Int8|  |
|**multi_sig_index** |  Int8|  |
|transaction_block_height |  Int8|  |
|signer |  Varchar|  |
|**is_sender_primary** |  Bool|  |
|#[sql_name = "type"]|||
|type_ |  Varchar|  |
|public_key |  Varchar|  |
|signature |  Varchar|  |
|threshold |  Int8|  |
|public_key_indices |  Jsonb|  |
|inserted_at |  Timestamp|  |




### [table_items](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjExfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|key |  Text|  |
|**transaction_version** |  Int8|  |
|**write_set_change_index** |  Int8|  |
|transaction_block_height |  Int8|  |
|table_handle |  Varchar|  |
|decoded_key |  Jsonb|  |
|decoded_value | `Nullable<Jsonb>` |  |
|is_deleted |  Bool|  |
|inserted_at |  Timestamp|  |




### [table_metadatas](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjh9LCJ0eXBlIjoicXVlcnkifSwiZGlzcGxheSI6InRhYmxlIiwidmlzdWFsaXphdGlvbl9zZXR0aW5ncyI6e319)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**handle** |  Varchar|  |
|key_type |  Text|  |
|value_type |  Text|  |
|inserted_at |  Timestamp|  |




### [token_activities](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjEwfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**event_account_address** |  Varchar|  |
|**event_creation_number** |  Int8|  |
|**event_sequence_number** |  Int8|  |
|collection_data_id_hash |  Varchar|  |
|token_data_id_hash |  Varchar|  |
|property_version |  Numeric|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|name |  Varchar|  |
|transfer_type |  Varchar|  |
|from_address | `Nullable<Varchar>` |  |
|to_address | `Nullable<Varchar>` |  |
|token_amount |  Numeric|  |
|coin_type | `Nullable<Text>` |  |
|coin_amount | `Nullable<Numeric>` |  |
|inserted_at |  Timestamp|  |
|transaction_timestamp |  Timestamp|  |




### [token_datas](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjQwfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**token_data_id_hash** |  Varchar|  |
|**transaction_version** |  Int8|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|name |  Varchar|  |
|maximum |  Numeric|  |
|supply |  Numeric|  |
|largest_property_version |  Numeric|  |
|metadata_uri |  Varchar|  |
|payee_address |  Varchar|  |
|royalty_points_numerator |  Numeric|  |
|royalty_points_denominator |  Numeric|  |
|maximum_mutable |  Bool|  |
|uri_mutable |  Bool|  |
|description_mutable |  Bool|  |
|properties_mutable |  Bool|  |
|royalty_mutable |  Bool|  |
|default_properties |  Jsonb|  |
|inserted_at |  Timestamp|  |
|collection_data_id_hash |  Varchar|  |
|transaction_timestamp |  Timestamp|  |
|description |  Text|  |




### [token_ownerships](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjQ4fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**token_data_id_hash** |  Varchar|  |
|**property_version** |  Numeric|  |
|**transaction_version** |  Int8|  |
|**table_handle** |  Varchar|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|name |  Varchar|  |
|owner_address |  `Nullable<Varchar>`|  |
|amount |  Numeric|  |
|table_type |  `Nullable<Text>`|  |
|inserted_at |  Timestamp|  |
|collection_data_id_hash |  Varchar|  |
|transaction_timestamp |  Timestamp|  |




### [tokens](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjE0fSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**token_data_id_hash** |  Varchar|  |
|**property_version** |  Numeric|  |
|**transaction_version** |  Int8|  |
|creator_address |  Varchar|  |
|collection_name |  Varchar|  |
|name |  Varchar|  |
|token_properties |  Jsonb|  |
|inserted_at |  Timestamp|  |
|collection_data_id_hash |  Varchar|  |
|transaction_timestamp |  Timestamp|  |




### [transactions](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjMwfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**version** |  Int8| version is the sequence id of the transaction |
|block_height |  Int8|  |
|hash |  Varchar|  |
|#[sql_name = "type"]|||
|type_ |  Varchar|  |
|payload | `Nullable<Jsonb>` | The payload contains arguments, code, function, type, type arguments if it is a function call |
|state_change_hash |  Varchar|  |
|event_root_hash |  Varchar|  |
|state_checkpoint_hash | `Nullable<Varchar>` |  |
|gas_used |  Numeric|  |
|success |  Bool|  |
|vm_status |  Text|  |
|accumulator_root_hash |  Varchar|  |
|num_events |  Int8|  |
|num_write_set_changes |  Int8|  |
|inserted_at |  Timestamp|  |
|epoch |  Int8|  |






### [user_transactions](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjQxfSwidHlwZSI6InF1ZXJ5In0sImRpc3BsYXkiOiJ0YWJsZSIsInZpc3VhbGl6YXRpb25fc2V0dGluZ3MiOnt9fQ==)

| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**version** |  Int8|  |
|block_height |  Int8|  |
|parent_signature_type |  Varchar|  |
|sender |  Varchar|  |
|sequence_number |  Int8|  |
|max_gas_amount |  Numeric|  |
|expiration_timestamp_secs |  Timestamp|  |
|gas_unit_price |  Numeric|  |
|timestamp |  Timestamp|  |
|entry_function_id_str |  Text|  |
|inserted_at |  Timestamp|  |
|epoch |  Int8|  |




### [write_set_changes](https://blockeden.xyz/analytics/question#eyJkYXRhc2V0X3F1ZXJ5Ijp7ImRhdGFiYXNlIjoyLCJxdWVyeSI6eyJzb3VyY2UtdGFibGUiOjZ9LCJ0eXBlIjoicXVlcnkifSwiZGlzcGxheSI6InRhYmxlIiwidmlzdWFsaXphdGlvbl9zZXR0aW5ncyI6e319)
| Field                       | Type | Description |
|-----------------------------| ---- | ----------- |
|**transaction_version** |  Int8|  |
|**index** |  Int8|  |
|hash |  Varchar|  |
|transaction_block_height |  Int8|  |
|#[sql_name = "type"]|||
|type_ |  Text|  |
|address |  Varchar|  |
|inserted_at |  Timestamp|  |

