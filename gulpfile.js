'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', () => {
    gulp.watch('./sass/**/*.scss', gulp.series(
        'sass'
    ));
});
