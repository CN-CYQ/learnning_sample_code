// node.js 模块化导入导出
// 导入模块
const http = require('http')
const obj = require('./01.js')

function getSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]      
    } 
    return sum
}
// 导出模块
// module.exports = getSum
export default getSum
