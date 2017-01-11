var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename =  require("gulp-rename");
var clean = require('gulp-clean');
const del = require('del');


module.exports = function(){
    var source = './src/';
    var destination = './dist/';

    gulp.task('_move:src->dist', function () {
        return gulp.src(source+'**/*.js')
            .pipe(gulp.dest(destination));
    });

    gulp.task('_minify:js', function () {
        return gulp.src(destination+'**/*.js')
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(destination));
    });

    gulp.task('_rename:index.min.js',function(){
        return gulp.src(destination+'index.min.js')
            .pipe(rename('BasePackageNode.min.js'))
            .pipe(gulp.dest(destination));
    });

    gulp.task('_remove:index.min.js',function(){
        del(destination+'index.min.js');
        del([destination+'**/*.min.js','!'+destination+'**/*.min.js']);
    });



};