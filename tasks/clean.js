// 此命令用于在 进行更新 app目录下的 文件后，在更新到server目录前，对server目录中原来的文件进行删除的命令

import gulp from 'gulp'
import del from 'del' 

gulp.task('clean',()=>{
	return del(['dist/css','dist/js'])
})
