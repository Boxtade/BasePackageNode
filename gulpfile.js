var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var mocha = require('gulp-mocha');
var util = require('gulp-util');

require('./gulp/gulp-release')();
require('./gulp/gulp-deploy')();


gulp.task('release',function(callback){
    runSequence('move:src->dist','minify:js','rename:index.min.js','remove:index.min.js',callback);
});

gulp.task('test', function() {
    gulp.watch(['./src/**', './test/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['./test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' , ui: 'tdd'}));
});

gulp.task('deploy',['release'],function(){
    return gulp
        .src(['./dist/**'])
        .pipe(gulpSSH.dest('/var/www/dist'))
});
