var gulp = require('gulp')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')
const base64 = require('gulp-base64');
const minifyCss = require('gulp-minify-css');
const rev = require('gulp-rev');  // 给css文件 添加后缀
const revCollector = require('gulp-rev-collector');

gulp.task('style',function(){
	return gulp.src('src/styl/main.styl')
		   .pipe(stylus({compress:true}))
		   .pipe(base64())
		   .pipe(autoprefixer({ browsers: ['last 2 versions']}))
		   .pipe(minifyCss())
		   .pipe(rev())
		   .pipe(gulp.dest('dist/css'))
		   .pipe(rev.manifest())       //- 生成一个rev-manifest.json
           .pipe(gulp.dest('dist/css/rev'));

})

gulp.task('html', function() {
    gulp.src(['dist/css/rev/*.json', 'index.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./dist'));                     //- 替换后的文件输出的目录
})