var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
  return gulp.src('styles/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('styles'));
});

gulp.task('js', function() {
  return gulp.src('scripts/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('scripts'));
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/sass/*.scss', ['sass']);
});

gulp.task('default', function () {
  gulp.watch(['styles/sass/*.scss', 'scipts/*.js'], ['sass', 'js']);
});