/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
     git = require('gulp-git');

gulp.task('default', function () {
    console.log("Bonsoir Elliot");
});

gulp.task('gitpull', function () {
    git.pull('origin', 'master', { args: '--rebase' }, function (err) {
        if (err) throw err;
    });
});

