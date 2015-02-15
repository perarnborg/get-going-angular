var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

module.exports = function() {
	return gulp.src('assets/js/app.js')
		.pipe(ngAnnotate())
		.pipe(gulp.dest('assets/js'));
};
