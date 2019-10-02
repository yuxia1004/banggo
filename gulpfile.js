const gulp = require('gulp');
const bable = require('gulp-bable');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
gulp.task('sass',() => {
    gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'));
})
gulp.task('es6',() => {
    gulp.src('./src/js/es6/*.js')
    .pipe(babel({
        presets: ['@bable/env']
    }))
    .pipe(gulp.dest('./src/js/es5'));
})
gulp.task('es5',() => {
    gulp.src('./src/js/es5/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
})
gulp.task('default', () => {
    gulp/watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/js/es6/*.js',['es6']);
    gulp.watch('./src/js/es6/*.js',['es5']);
})