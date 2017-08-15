var gulp = require('gulp')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('style',function(){
	return gulp.src('styl/test2.styl')
		   .pipe(stylus())
		   .pipe(autoprefixer())
		   .pipe(gulp.dest('css')) 
})

gulp.task('default', ['style']);