var gulp = require("gulp");

module.exports = function() {
	gulp.watch(["assets/app-angular/*.js", "assets/app-angular/**/*.js"], ["ng-annotate"]);
	gulp.watch(["assets/css/**.scss"], ["sass"]);
};
