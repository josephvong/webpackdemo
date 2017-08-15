const path = require('path');
//const poststylus = require('poststylus');
//const webpack = require('webpack');

module.exports = {
	entry:{
		"main":__dirname+"/app/main.js"  // 入口js文件为 main
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'), // js文件打包输出路径
		publicPath:path.resolve(__dirname,'asset')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:'babel-loader'
			},
			{
				test:/\.styl$/,
				use:['style-loader','css-loader','stylus-loader']
			}
		]
	},
}