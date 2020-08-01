var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');


//Single file export all
gulp.task('min-css-export-single-file', function(cb){
    // create task
    gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css'))
    
    cb();
});

//Separate files export
gulp.task('min-css-export-all', function(cb){
    // create task
    gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(rename(function (path) {
        // Updates the object in-place
        path.basename += "";
        path.extname = ".min.css";
      }))
    .pipe(gulp.dest('dist/css'))

    cb();
});