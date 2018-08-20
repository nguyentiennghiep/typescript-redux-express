const gulp = require('gulp');
const plumber = require('gulp-plumber');
const webpackConfig = require('./webpack.config');
const webpack = require('webpack-stream');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const tslint = require("gulp-tslint");
const exec = require("child_process").exec;
var tslintconfig = require('./tslint.json');

gulp.task("default", () => {
    runSequence(['copy-assets', 'css', 'tsc','lint'], ['webpack', 'watch', 'browser-sync']);
});

// build tsc
gulp.task('tsc', (cb) => {
    return exec('node ./node_modules/typescript/bin/tsc', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});


// copy folder to build folder
gulp.task('copy-assets', () => {
    return gulp.src(['./src/public/**/', '!./src/public/css/**/', './src/views/**/'], { base: 'src' })
        .pipe(gulp.dest('./dist'))
});


// cp css to css folder
gulp.task('css', () => {
    return gulp
        .src('./src/public/css/*.css')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/public/css'))

});


//Run webpack
gulp.task('webpack', () => {
    return gulp.src('dummy')
        .pipe(plumber())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/public/js'));
});


//watch change by gulp
gulp.task('watch', () => {
    return gulp.watch('./src/public/css/*.css', ['css'])
});


gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init(null, {
        proxy: "http://localhost:8000",
    });
});
gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({
        script: './dist/app-server.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});


// Lint task 
gulp.task("lint", () =>
    gulp.src("src/**/*.ts*")
        .pipe(tslint({tslintconfig,formatter: "verbose"}))
        .pipe(tslint.report({
            reportLimit: 0
        }))
);
