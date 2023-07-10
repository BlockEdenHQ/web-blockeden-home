const {
  blogPosts,
} = require("../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json");
const fs = require("fs");

function generate(filename, filterTag) {
  const recent = blogPosts
    .filter((p) => {
      if (!filterTag) {
        return true;
      } else {
        return p.metadata.tags.some((t) => t.label === filterTag);
      }
    })
    .slice(0, 3);

  fs.writeFileSync(
    `${__dirname}/../src/components/news/${filename}.json`,
    JSON.stringify(recent, null, 2)
  );
}

generate("latest-blogs-");
generate("latest-blogs-aptos", "aptos");
generate("latest-blogs-sui", "sui");
