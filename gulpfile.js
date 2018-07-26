var gulp = require('gulp');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var webpackConfig = require('./webpack.config');
var webpack = require('webpack-stream');
var runSequence = require('run-sequence');
var tsProject = ts.createProject('tsconfig.json');

gulp.task("default", () => {
    runSequence(['copy-assets', 'css'],'webpack');
});


gulp.task('copy-assets', () => {
    return gulp.src(['./src/public/**/', '!./src/public/css/**/', './src/views/**/'], { base: 'src' })
        .pipe(gulp.dest('./dist'))
});

gulp.task('css', () => {
    return gulp
        .src('./src/public/css/*.css')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/public/css'))

});

gulp.task('webpack', () => {
    return gulp.src('dummy')
        .pipe(plumber())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/public/js'));
});