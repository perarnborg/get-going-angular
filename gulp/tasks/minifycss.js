var gulp = require("gulp");
var minifyCSS = require("gulp-minify-css");

module.exports = function() {
	return gulp.src("./assets/css/app.css")
	.pipe(minifyCSS())
	.pipe(gulp.dest("./assets/css"));
};
