const tags1 = require("./tags-data.json");
const tags2 = require("./chains-data.json");
const tags = [
  ...tags1.data.tags,
  ...tags2.data.chains,
];
var tsxString = require('fs').readFileSync(`${__dirname}/dapp-list-template.tsx`);

function slugify(name) {
  return name.toLowerCase().replace(/ /g, "-");
}

tags.forEach(tag => {
  const fileString = tsxString.toString().replace("TAG_JSON", JSON.stringify(tag));
  require("fs").writeFileSync(`${__dirname}/../src/pages/dapp/${slugify(tag.name)}.tsx`, fileString)
});
