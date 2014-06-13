var gulp = require('gulp');

var less = require('gulp-less'),
    concat = require('gulp-concat');

gulp.task('build-css', function() {
  return gulp.src('less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-js', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('bootstrap.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['build-js', 'build-css']);
