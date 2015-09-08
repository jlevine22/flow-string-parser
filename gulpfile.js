var gulp = require('gulp');
var gutil = require('gulp-util');
var Promise = require('bluebird');
var mocha = require('gulp-mocha');

gulp.task('default', function () {
    // do stuff
});

gulp.task('test', function () {
    return gulp.src(['./tests/*.js'])
        .pipe(mocha());
});