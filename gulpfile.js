var gulp = require('./gulp')([
	'javascript-vendor',
	'javascript-app',
	{
		dependencies: ['javascript-app'],
		name: 'ng-annotate'
	},
	{
		dependencies: ['javascript-vendor', 'ng-annotate'],
		name: 'uglify'
	},
	'sass',
	{
		dependencies: ['sass'],
		name: 'minifycss'
	},
	'bower',
	'watch'
]);

gulp.task("default", ["bower", "javascript-vendor", "ng-annotate", "sass"]);
