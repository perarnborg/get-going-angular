var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var gulpfilter = require("gulp-filter");
var jshint = require("gulp-jshint");
var notify = require("gulp-notify");
var concat = require("gulp-concat");

module.exports = function () {
  var filter = gulpfilter(["./assets/js/vendor/*.js", "./bower_components"]);
  return gulp.src([
    "./assets/app-angular/iife-open.js",
    "./assets/app-angular/app.module.js",
    "./assets/app-angular/app.routes.js",
    "./assets/app-angular/app.config.js",
    "./assets/app-angular/*/*.js",
    "./assets/app-angular/iife-close.js"
  ])
    .pipe(filter)
    .pipe(jshint({
      camelcase: true,
      curly: true,
      forin: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      noempty: true,
      nonbsp: true,
      undef: true,
      unused: true,
      strict: true,
      eqeqeq: true,
      es3: true,
      quotmark: "double"
    }))
      .pipe(notify(function (file) {

        if (file.jshint.success) { return false; }

        var errors = file.jshint.results.map(function (data) {
        if (data.error) { return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason; }
        }).join("\n");

        return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;

      }))
      .pipe(filter.restore())
      .pipe(concat("app.js"))
      .pipe(gulp.dest("./assets/js"));
};
