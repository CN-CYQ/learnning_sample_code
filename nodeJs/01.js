// 引入 fs 模块
const fs = require('fs')
// 写入文件内容
fs.writeFileSync('./hello.txt', 'sahdbajsbdabksjdkj hbkdjahbsdk', (err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('写入成功')
    }
})
// 读取文件内容
fs.readFile('./hello.txt', (err, data)=>{
    if(err){
        console.log(err)
    } else {
        console.log(data.toString())
    }
})
