//express_demo.js 文件
import * as fs from 'fs';
import {add} from './add';
/**
 * 异步读取input.txt文件
 */ 
function fileread(){

fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});
}
fileread();
/**
 * 加法运算模块的运用
 */
function useadd(){
   console.log('运算结果'+add(1,2));
}
useadd();