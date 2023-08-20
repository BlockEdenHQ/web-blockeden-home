const projects = require("../src/projects-data.json");
var tsxString = require('fs').readFileSync(`${__dirname}/dapp-template.tsx`);

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[\s\W-]+/g, "-") // Replace spaces, non-word characters and dashes with a single dash.
    .replace(/^-|-$/g, ''); // Remove leading and trailing dashes
}

projects.data.projects.forEach(project => {
  const fileString = tsxString.toString().replace("PROJECT_JSON", JSON.stringify(project));
  require("fs").writeFileSync(`${__dirname}/../src/pages/dapp/${slugify(project.name)}.tsx`, fileString)
});
