var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var notify = require("gulp-notify");

module.exports = function() {
	return gulp.src("./assets/css/scss/app.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({
		errLogToConsole: false,
		onError: function(error) {
			return notify().write(error);
		}
	}))
	//.pipe(pxtorem({ replace: false, prop_white_list: ["font", "font-size", "line-height", "letter-spacing", "width", "max-width"] }))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer({ browsers: ["last 3 versions"] }))
	.pipe(gulp.dest("./assets/css"));
};
