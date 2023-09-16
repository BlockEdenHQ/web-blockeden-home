const sm = require('sitemap');
var XmlSitemap = require('xml-sitemap');
var xmlString = require('fs').readFileSync(`${__dirname}/../../build/sitemap.xml`);
var oldSitemap = new XmlSitemap(xmlString);

[
  // external
  ...[
    'https://blockeden.xyz/analytics/public/dashboard/8aebd278-8f33-43ea-95f3-8baf3ecab5cf/',
    'https://blockeden.xyz/sui-health-checker/',
    'https://blockeden.xyz/api-marketplace',
    'https://blockeden.xyz/api-marketplace/sui',
    'https://blockeden.xyz/api-marketplace/aptos',
    'https://blockeden.xyz/api-marketplace/aptos-indexer',
    'https://blockeden.xyz/api-marketplace/openai-chatgpt',
    'https://blockeden.xyz/api-marketplace/optimism',
    'https://blockeden.xyz/api-marketplace/solana',
    'https://blockeden.xyz/api-marketplace/arbitrum',
    'https://blockeden.xyz/api-marketplace/stellar-futurenet-soroban',
    'https://blockeden.xyz/api-marketplace/arbitrum-nova',
    'https://blockeden.xyz/api-marketplace/near',
    'https://blockeden.xyz/api-marketplace/polygon',
    'https://blockeden.xyz/api-marketplace/ethstorage-galileo',
    'https://blockeden.xyz/api-marketplace/binance-smart-chain',
    'https://blockeden.xyz/api-marketplace/polygon_zkevm',
    'https://blockeden.xyz/api-marketplace/harmony',
    'https://blockeden.xyz/api-marketplace/filecoin',
    'https://blockeden.xyz/api-marketplace/gnosis',
    'https://blockeden.xyz/api-marketplace/iotex',
    'https://blockeden.xyz/api-marketplace/ethereum',
    'https://blockeden.xyz/api-marketplace/stellar-futurenet-soroban-indexer',
  ].map(it => ({
    url: it,
    changefreq: 'weekly',
    priority: 0.5,
  })),

  // high priority
  ...[
    'https://blockeden.xyz/about-us/',
    'https://blockeden.xyz/dash/login/',
    'https://blockeden.xyz/dash/sign-up/',
    'https://blockeden.xyz/pricing/',
    'https://blockeden.xyz/docs/intro/',
    'https://blockeden.xyz/'
  ].map(it => ({
    url: it,
    changefreq: 'weekly',
    priority: 1.0,
  })),
].forEach(it => {
  if (oldSitemap.hasUrl(it.url)) {
    const {url, ...opts} = it;
    oldSitemap.setOptionValues(it.url, opts);
  } else {
    oldSitemap.add(it)
  }
});

oldSitemap.removeOption('lastmod');

require('fs').writeFileSync(`${__dirname}/../../build/sitemap-manual.xml`, oldSitemap.xml)
require('fs').writeFileSync(`${__dirname}/../../build/sitemap.xml`, oldSitemap.xml)
