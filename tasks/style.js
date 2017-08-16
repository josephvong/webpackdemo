var gulp = require('gulp')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')
const base64 = require('gulp-base64');

gulp.task('style',function(){
	return gulp.src('src/styl/main.styl')
		   .pipe(stylus({compress:true}))
		   .pipe(base64())
		   .pipe(autoprefixer({ browsers: ['last 2 versions']}))
		   .pipe(gulp.dest('src/css')) 
})
