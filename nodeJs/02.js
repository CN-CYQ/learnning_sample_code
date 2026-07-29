/**
 * 目标:在 Node.js 环境的代码中,应使用绝对路径
 *  原因:代码的相对路径是以终端所在文件夹为起点,而不是Vscode 资源管理器
 * 容易造成目标文件找不到的错误
 * */
const fs = require('fs')
// 引入 path 模块
const path = require('path')
// 调用 path.join() 配合 __dirname 变量,获取当前文件所在目录的绝对路径
fs.readFile(path.join(__dirname, '../hello.txt'), (err, data) => {
    if (err) console.log(err)
    else console.log(data.toString())
})