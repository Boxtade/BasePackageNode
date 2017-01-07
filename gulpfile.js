var gulp = require('gulp');
// var run = require('gulp-run');

var source = './src/';
var destination = './dist/';

// gulp.task('compile:app', function(){
//     return gulp.src(['src/**/*.js','src/**/*.map'])
//         .pipe(run('npm run tsc'))
//         .pipe(gulp.dest('./dist'))
//         .pipe(connect.reload());
//
// });


var uglify = require("gulp-uglify");
var rename =  require("gulp-rename");
var clean = require('gulp-clean');


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

