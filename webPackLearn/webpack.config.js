const path = require('path')

//导入插件
const HtmlPlugin = require('html-webpack-plugin')

//实例化 HtmlPlugin插件
const htmlPlugin = new HtmlPlugin({
	template: './src/index.html',
	filename: './index.html'
})


//自动清理dist
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const cleanPlugin = new CleanWebpackPlugin();


module.exports = {
	mode: "development",

	//指定打包的入口
	entry: path.join(__dirname, './src/index.js'),
	//指定打包的出口
	output: {
		path: path.join(__dirname, './dist'),
		//打包文件名
		filename: 'js/bundle.js'
	},

	plugins: [htmlPlugin,cleanPlugin], //挂在插件的实例对象

	devServer: {
		open: true,
		host: '127.0.0.1',
		port: 889
	},

	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },//use 从后往前调用
			{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
			// { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' }, //图片小于22229  会被转成base64格式
			{
				test: /\.jpg|png|gif$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 22229,
						outputPath:"image"
					},

				},
			},  //图片小于22229  会被转成base64格式

			{
				test:/\.js$/,
				exclude:/node_modules/,
				use :{
					loader:'babel-loader',
					options: {
						plugins :['@babel/plugin-proposal-class-properties']
					}
				}
			}

		]
	}
}