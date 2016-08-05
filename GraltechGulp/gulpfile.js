/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
     git = require('gulp-git'),
     concat = require('gulp-concat'),
     minimize = require('gulp-minify-css'),
     uglify = require('gulp-uglify'),
     watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

var path = {
    output: 'miStyle.css'
};

gulp.task('default', function () {
    console.log("https://www.youtube.com/channel/UC1DIYVPITelr6k_ahsblU1A");
});

gulp.task('gitpull', function () {
    git.pull('origin', 'master', { args: '--rebase' }, function (err) {
        if (err) throw err;
    });
});


/*Tarea para recargar el browser cada vez que modifica algun archivo*/
gulp.task('reloadBrowser', ['gitpull'], function () {
    browserSync.reload({
        stream: true
    })
});

// gulp-concat
// gulp-minify-css

gulp.task('minimize', function () {
    gulp.src('Content/**/*.css')
    .pipe(concat('miStyle.css'))
    .pipe(minimize())
    .pipe(gulp.dest('styles'));
});

gulp.task('con-stream', function () {
    //gulp.src('JavaScripts/*.js')
});

gulp.task('feificar', function () {
    gulp.src('JavaScripts/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('scripts'));
});

gulp.task('build', ['minimize', 'feificar']);

gulp.task('watch', function () {
    gulp.watch(['Content/**/*.css', 'JavaScripts/**/*.js'], ['build']);
});