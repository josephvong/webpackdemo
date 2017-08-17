const gulp =require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream'); //让webpack以stream方式工作，与gulp整合 https://www.npmjs.com/package/webpack-stream
const uglify = require('gulp-uglify');

gulp.task('webpack',()=>{
	return gulp.src('src/app/main.js')
		.pipe(webpackStream(require('../webpack.config.js'),webpack))
		.pipe(gulp.dest('dist'))
})









