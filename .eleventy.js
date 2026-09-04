const markdownIt = require("markdown-it");

const md = markdownIt({ html: true, breaks: true, linkify: true });

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Render markdown strings from frontmatter/data files
  eleventyConfig.addFilter("markdownify", (str) => md.render(str || ""));

  return {
    pathPrefix: "/lucycreancounselling-beta2/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
