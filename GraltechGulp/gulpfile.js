/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
     git = require('gulp-git'),
    browserSync = require('browser-sync').create();

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