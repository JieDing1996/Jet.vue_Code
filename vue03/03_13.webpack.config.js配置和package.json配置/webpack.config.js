// 如何获取动态路径
//导入一个叫path模块,到node去找一个叫path包
const path=require("path");
//没有path包的话，得去安装
// 命令： npm init 初始化
// package name:meetwebpack
// entry point:index.js  随便写的
// 其他全部回车 ok 然后就自动生成了package.json文件 这个文件就是告诉你当前项目的信息 最好不要加上注释信息，不然容易出错 
// package.json文件有依赖的话，还要执行npm install
// package.json文件里"license": "ISC"  //协议 项目开源的话就需要这个东西

module.exports={
	entry:"./src/main.js",  // 入口
	output:{  // 出口
		path:path.resolve(__dirname,"dist"),   // 这里动态获取绝对路径 resolve()可以给两个参数进行拼接 
		filename:"bundle.js"            //__dirname 全局变量 不需要你去定义 保存的是当前文件夹所在路径
	}
}

//所有操作完成后  直接webpack或者npm run build就可以打包
//npm run build  这里运行了package.json>scripts>build的那段代码

