const webpack = require('webpack');
const webpackStream = require('webpack-stream'); //让webpack以stream方式工作，与gulp整合 https://www.npmjs.com/package/webpack-stream
const uglify = require('gulp-uglify');