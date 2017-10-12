"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//创建days数组
var days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//创建日期对象date
var date = new Date();
/**
 * 编写闰年函数
 */
function is_leapyear(year) {
    date.setFullYear(year, 1, 29);
    return date.getDate() === 29;
}
exports.is_leapyear = is_leapyear;
/**
 * 编写函数获取年份
 */
function get_year(time) {
    return new Date(time).getFullYear();
}
exports.get_year = get_year;
/**
 * 编写函数设置年份
 */
function set_year(time, year) {
    var dt = new Date(time);
    var dayOfMonth = dt.getDate();
    dt.setFullYear(year);
    if (dt.getDate() < dayOfMonth) {
        dt.setDate(0);
    }
    dt.setFullYear(year);
    return dt.getTime();
}
exports.set_year = set_year;
/**
 * 编写函数获取月份
 */
function get_month(time) {
    return new Date(time).getMonth() + 1;
}
exports.get_month = get_month;
/**
 * 编写函数设置年份
 */
function set_month(time, month) {
    var dt = new Date(time);
    var dayOfMonth = dt.getDate();
    dt.setMonth(month - 1);
    if (dt.getDate() < dayOfMonth) {
        dt.setDate(0);
    }
    return dt.getTime();
}
exports.set_month = set_month;
/**
 * 编写函数设置年份
 */
function get_day_of_month(time) {
    return new Date(time).getDate();
}
exports.get_day_of_month = get_day_of_month;
/**
 * 编写函数日期年份
 */
function set_day_of_month(time, day) {
    var dt = new Date(time);
    dt.setDate(day);
    return dt.getTime();
}
exports.set_day_of_month = set_day_of_month;
/**
 * 编写函数获取小时
 */
function get_hours(time) {
    return new Date(time).getHours();
}
exports.get_hours = get_hours;
/**
 * 编写函数设置小时
 */
function set_hours(time, hours) {
    var dt = new Date(time);
    dt.setHours(hours);
    return dt.getTime();
}
exports.set_hours = set_hours;
/**
 * 编写函数获取分钟
 */
function get_minutes(time) {
    return new Date(time).getMinutes();
}
exports.get_minutes = get_minutes;
/**
 * 编写函数设置分钟
 */
function set_minutes(time, minutes) {
    var dt = new Date(time);
    dt.setMinutes(minutes);
    return dt.getTime();
}
exports.set_minutes = set_minutes;
/**
 * 编写函数获取秒钟
 */
function get_seconds(time) {
    return new Date(time).getSeconds();
}
exports.get_seconds = get_seconds;
/**
 * 编写函数设置秒钟
 */
function set_seconds(time, seconds) {
    var dt = new Date(time);
    dt.setSeconds(seconds);
    return dt.getTime();
}
exports.set_seconds = set_seconds;
/**
 * 编写函数获取毫秒
 */
function get_milliseconds(time) {
    return new Date(time).getMilliseconds();
}
exports.get_milliseconds = get_milliseconds;
/**
 * 编写函数设置毫秒
 */
function set_milliseconds(time, milliseconds) {
    var dt = new Date(time);
    dt.setMilliseconds(milliseconds);
    return dt.getTime();
}
exports.set_milliseconds = set_milliseconds;
/**
 * 编写函数获取日期
 */
function get_dayOfWeek(time) {
    return new Date(time).getDay();
}
exports.get_dayOfWeek = get_dayOfWeek;
/**
 * 编写函数获取月份中的日期
 */
function get_days_in_month(time) {
    var dt = new Date(time);
    var month = dt.getMonth() + 1;
    if (month === 2 && is_leapyear(dt.getFullYear())) {
        return 29;
    }
    return days[month];
}
exports.get_days_in_month = get_days_in_month;
/**
 * 编写函数解析日期字符串对象
 */
function parse(string) {
    return Date.parse(string);
}
exports.parse = parse;
/**
 * 编写函数返回当前日期
 */
function now() {
    return Date.now();
}
exports.now = now;
/**
 * 编写函数获取日期
 */
function get_day_of_week(time) {
    return new Date(time).getDay();
}
exports.get_day_of_week = get_day_of_week;
/**
 * 编写函数返回格林威治时间和本地时间之间的时差,以分钟为单位
 */
function get_timezone_offset(time) {
    return new Date(time).getTimezoneOffset();
}
exports.get_timezone_offset = get_timezone_offset;
/**
 * 编写函数设置时间并返回为字符串类型（包含日期月份年份信息）
 */
function tm2str(time) {
    return new Date(time).toString();
}
exports.tm2str = tm2str;
/**
 *编写函数设置时间并返回为字符串类型（只包含时分秒信息）
 */
function tm2tmstr(time) {
    return new Date(time).toTimeString();
}
exports.tm2tmstr = tm2tmstr;
/**
 * 编写函数设置时间并根据本地时间返回为字符串类型（格式：2017/10/12 上午9:54:29）
 */
function tm2local_str(time) {
    return new Date(time).toLocaleString();
}
exports.tm2local_str = tm2local_str;
/**
 * 编写函数设置时间并根据本地时间返回为字符串类型（格式：上午9:54:29）
 */
function tm2local_tmstr(time) {
    return new Date(time).toLocaleTimeString();
}
exports.tm2local_tmstr = tm2local_tmstr;
/**
 * 编写函数设置时间并返回取得IOS格式的日期字串
 */
function tm2isostr(time) {
    return new Date(time).toISOString();
}
exports.tm2isostr = tm2isostr;
/**
 * 编写函数设置事件返回字符串的 Date 对象，并格式化为 JSON 数据
 */
function tm2json(time, key) {
    return new Date(time).toJSON(key);
}
exports.tm2json = tm2json;
/**
 * 编写函数返回日起对象的原始值（毫秒数）
 */
function valueof(time) {
    return new Date(time).valueOf();
}
exports.valueof = valueof;
