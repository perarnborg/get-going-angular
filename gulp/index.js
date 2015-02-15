var gulp = require('gulp');

module.exports = function(tasks) {
  tasks.forEach(function(task) {
    if(typeof(task) == "object") {
      gulp.task(task.name, task.dependencies, require('./tasks/' + task.name));
    } else {
      gulp.task(task, require('./tasks/' + task));
    }
  });
  return gulp;
};
