var gulp = require('gulp');

var less = require('gulp-less'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');

gulp.task('build-css', function() {
  return gulp.src('less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'))
    .pipe(less({
      compress: true
    }))
    .pipe(rename('bootstrap.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-js', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('bootstrap.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename('bootstrap.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build-fonts', function() {
  return gulp.src('fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('build', ['build-js', 'build-css', 'build-fonts']);

gulp.task('pack', ['build'], function() {
  gulp.src('dist/**')
    .pipe(zip('bootstrap.zip'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function() {
  gulp.watch('js/**/*.js', ['build-js']);
  gulp.watch('less/**/*.less', ['build-css']);
});
