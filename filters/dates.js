/*
  A date formatter filter for Nunjucks
*/
module.exports = function (date) {
	var d = new Date(date)
	var month = parseInt(d.getMonth()) + 1
	return d.getDate() + "." + month + "." + d.getUTCFullYear()
}
