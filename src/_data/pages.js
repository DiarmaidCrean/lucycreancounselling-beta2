const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

module.exports = function () {
  const pagesDir = path.join(__dirname, "../pages");
  const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith(".md"));

  const pages = {};
  for (const file of files) {
    const raw = fs.readFileSync(path.join(pagesDir, file), "utf8");
    const { data, content } = matter(raw);
    const key = file.replace(".md", "").replace(/-/g, "_");
    pages[key] = { ...data, body: content.trim() };
  }
  return pages;
};
