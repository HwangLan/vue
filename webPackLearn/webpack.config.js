const path = require('path')

module.exports = {
	mode : "development",

	//指定打包的入口
	entry: path.join(__dirname, './src/index.js'),
	//指定打包的出口
	output: {
		path: path.join(__dirname,'./dist'),
		//打包文件名
		filename: 'bundle.js'
	}
}