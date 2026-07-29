// ECMAScript 标准——默认导出、导入
// 导入模块
import getSum from './04.js'

console.log(getSum([1, 2, 3]))
function getAvg(arr){   
    let sum = getSum(arr)   
    return sum / arr.length
}

const baseUrl = 'http://localhost:3000'
const getArraySum = arr => arr.reduce((sum, val) => sum + val, 0)
// 默认导出
export default {
    baseUrl,
    getArray: getArraySum,    
    getAvg,
}