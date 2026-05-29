const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const sourceRoot = path.resolve(projectRoot, "..");
const html = fs.readFileSync(path.join(sourceRoot, "index.html"), "utf8");
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

if (!styleMatch || !scriptMatch) {
  throw new Error("Could not find inline style or script in ../index.html");
}

const style = styleMatch[1].replace(/url\("main_pic\.png"\)/g, 'url("/main_pic.png")');
const script = scriptMatch[1];
const publicHtml = html
  .replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="/src/styles.css">')
  .replace(/<script>[\s\S]*?<\/script>/, '<script type="module" src="/src/app.js"></script>');

fs.writeFileSync(path.join(projectRoot, "src", "styles.css"), style.trimStart(), "utf8");
fs.writeFileSync(path.join(projectRoot, "src", "app.js"), script.trimStart(), "utf8");
fs.writeFileSync(path.join(projectRoot, "public", "index.html"), publicHtml, "utf8");

console.log("split complete");
