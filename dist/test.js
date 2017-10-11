"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//express_demo.js 文件
var fs = require("fs");
var add_1 = require("./add");
/**
 * 异步读取input.txt文件
 */
function fileread() {
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
function useadd() {
    console.log('运算结果' + add_1.add(1, 2));
}
useadd();
