

### Address

| Field                 | Type    | Description                                                  |
| --------------------- | ------- | ------------------------------------------------------------ |
| account_address       | VARCHAR | The account address associated with the Address struct.      |
| first_appearance_tx   | VARCHAR | The identifier of the transaction where this address first appeared. |
| first_appearance_time | BIGINT  | The timestamp (Unix time) of the first appearance of this address. |


### Checkpoint

| Field                      | Type         | Description                                                  |
| -------------------------- | ------------ | ------------------------------------------------------------ |
| sequence_number            | BIGINT       | The sequence number of the checkpoint.                       |
| checkpoint_digest          | VARCHAR      | The digest (hash) of the checkpoint.                         |
| epoch                      | BIGINT       | The epoch number for this checkpoint.                        |
| transactions               | JSON or TEXT | A serialized list of transaction identifiers in the checkpoint (as JSON or comma-separated values). |
| previous_checkpoint_digest | VARCHAR      | The digest (hash) of the previous checkpoint, if any.        |
| end_of_epoch               | BOOLEAN      | Indicates if this checkpoint is the end of an epoch.         |
| total_gas_cost             | BIGINT       | The total gas cost for this checkpoint.                      |
| total_computation_cost     | BIGINT       | The total computation cost for this checkpoint.              |
| total_storage_cost         | BIGINT       | The total storage cost for this checkpoint.                  |
| total_storage_rebate       | BIGINT       | The total storage rebate for this checkpoint.                |
| total_transaction_blocks   | BIGINT       | The total number of transaction blocks in this checkpoint.   |
| total_transactions         | BIGINT       | The total number of transactions in this checkpoint.         |
| network_total_transactions | BIGINT       | The total number of transactions in the network up to this checkpoint. |
| timestamp_ms               | BIGINT       | The timestamp (in milliseconds) for this checkpoint.         |
| validator_signature        | VARCHAR      | The signature of the validator for this checkpoint.          |



