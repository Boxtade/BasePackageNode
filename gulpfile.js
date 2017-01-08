var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename =  require("gulp-rename");
var clean = require('gulp-clean');
var mocha = require('gulp-mocha');

var source = './src/';
var destination = './dist/';

gulp.task('minify:js', function () {
    return gulp.src(source+'**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(destination));
});

gulp.task('rename:index.min.js',['minify:js'],function(){
    return gulp.src(destination+'index.min.js')
        .pipe(rename('BasePackageNode.min.js'))
        .pipe(gulp.dest(destination));
});

gulp.task('remove:index.min.js',['rename:index.min.js'], function(){
    return gulp.src(destination+'index.min.js')
        .pipe(clean({force: true}));
});

gulp.task('release',['remove:index.min.js']);

gulp.task('test', function() {
    gulp.watch(['./src/**', './test/**'], ['mocha']);
});

gulp.task('mocha', function() {
    return gulp.src(['./test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' , ui: 'tdd'}));
});


