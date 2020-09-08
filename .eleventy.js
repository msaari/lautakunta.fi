const CleanCSS = require("clean-css")
const postcss = require("postcss")
const precss = require("precss")
const embedSoundCloud = require("eleventy-plugin-embed-soundcloud")

module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("date", require("./filters/dates.js"))
	//eleventyConfig.addPlugin(embedSoundCloud)

	return {
		dir: {
			input: "site",
			output: "dist",
			data: "_data",
		},
		feed:
			process.env.RSS_FEED ||
			"http://feeds.soundcloud.com/users/soundcloud:users:201911010/sounds.rss",
	}
}
