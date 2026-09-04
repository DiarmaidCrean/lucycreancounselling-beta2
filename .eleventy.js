module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
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
