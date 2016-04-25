var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
 
gulp.task('compileStylus', function() {
  gulp.src('main.styl')
    .pipe(stylus({ use: nib()}))
    .pipe(gulp.dest('./css'))
});

gulp.task('watch:styles', function(){
  gulp.watch('main.styl', ['compileStylus']);
});