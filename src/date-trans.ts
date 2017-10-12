//创建days数组
const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//创建日期对象date
const date = new Date();
/**
 * 编写闰年函数
 */
export function is_leapyear(year: number) {
    date.setFullYear(year, 1, 29);
	return date.getDate() === 29;
}
/**
 * 编写函数获取年份
 */
export function get_year(time: number) {
	return new Date(time).getFullYear();
}
/**
 * 编写函数设置年份
 */
export function set_year(time: number, year: number) {
	const dt = new Date(time);
	const dayOfMonth = dt.getDate();

	dt.setFullYear(year);

	if (dt.getDate() < dayOfMonth) {
		dt.setDate(0);
	}
	dt.setFullYear(year);
	return dt.getTime();
}
/**
 * 编写函数获取月份
 */
export function get_month(time: number) {
	return new Date(time).getMonth() + 1;
}
/**
 * 编写函数设置年份
 */
export function set_month(time: number, month: number) {
	const dt = new Date(time);
	const dayOfMonth = dt.getDate();
	dt.setMonth(month - 1);
	if (dt.getDate() < dayOfMonth) {
		dt.setDate(0);
	}
	return dt.getTime();
}
/**
 * 编写函数设置年份
 */
export function get_day_of_month(time: number) {
	return new Date(time).getDate();
}
/**
 * 编写函数日期年份
 */
export function set_day_of_month(time: number, day: number) {
	const dt = new Date(time);
	dt.setDate(day);
	return dt.getTime();
}
/**
 * 编写函数获取小时
 */
export function get_hours(time: number) {
	return new Date(time).getHours();
}
/**
 * 编写函数设置小时
 */
export function set_hours(time: number, hours: number) {
	const dt = new Date(time);
	dt.setHours(hours);
	return dt.getTime();
}
/**
 * 编写函数获取分钟
 */
export function get_minutes(time: number) {
	return new Date(time).getMinutes();
}
/**
 * 编写函数设置分钟
 */
export function set_minutes(time: number, minutes: number) {
	const dt = new Date(time)
	dt.setMinutes(minutes);
	return dt.getTime();
}
/**
 * 编写函数获取秒钟
 */
export function get_seconds(time: number) {
	return new Date(time).getSeconds();
}
/**
 * 编写函数设置秒钟
 */
export function set_seconds(time: number, seconds: number) {
	const dt = new Date(time);
	dt.setSeconds(seconds);
	return dt.getTime();
}
/**
 * 编写函数获取毫秒
 */
export function get_milliseconds(time: number) {
	return new Date(time).getMilliseconds();
}
/**
 * 编写函数设置毫秒
 */
export function set_milliseconds(time: number, milliseconds: number) {
	const dt = new Date(time);
	dt.setMilliseconds(milliseconds);
	return dt.getTime();
}
/**
 * 编写函数获取日期
 */
export function get_dayOfWeek(time: number) {
	return new Date(time).getDay();
}
/**
 * 编写函数获取月份中的日期
 */
export function get_days_in_month(time: number) {
	const dt = new Date(time);
	const month = dt.getMonth() + 1;
	if (month === 2 && is_leapyear(dt.getFullYear())) {
		return 29;
	}
	return days[month];
}
/**
 * 编写函数解析日期字符串对象
 */
export function parse(string: string) {
	return Date.parse(string);
}
/**
 * 编写函数返回当前日期
 */
export function now() {
	return Date.now();
}
/**
 * 编写函数获取星期中的日期
 */
export function get_day_of_week(time: number) {
	return new Date(time).getDay();
}
/**
 * 编写函数返回格林威治时间和本地时间之间的时差,以分钟为单位
 */
export function get_timezone_offset(time: number) {
	return new Date(time).getTimezoneOffset();
}
/**
 * 编写函数设置时间并返回为字符串类型（包含日期月份年份信息）
 */
export function tm2str(time: number) {
	return new Date(time).toString();
}
/**
 *编写函数设置时间并返回为字符串类型（只包含时分秒信息）
 */
export function tm2tmstr(time: number) {
	return new Date(time).toTimeString();
}
/**
 * 编写函数设置时间并根据本地时间返回为字符串类型（格式：2017/10/12 上午9:54:29）
 */
export function tm2local_str(time: number) {
	return new Date(time).toLocaleString();
}
/**
 * 编写函数设置时间并根据本地时间返回为字符串类型（格式：上午9:54:29）
 */
export function tm2local_tmstr(time: number) {
	return new Date(time).toLocaleTimeString();
}
/**
 * 编写函数设置时间并返回取得IOS格式的日期字串
 */
export function tm2isostr(time: number) {
	return new Date(time).toISOString();
}
/**
 * 编写函数设置事件返回字符串的 Date 对象，并格式化为 JSON 数据
 */
export function tm2json(time: number, key?: any) {
	return new Date(time).toJSON(key);
}
/**
 * 编写函数返回日起对象的原始值（毫秒）
 */
export function valueof(time: number) {
	return new Date(time).valueOf();
}