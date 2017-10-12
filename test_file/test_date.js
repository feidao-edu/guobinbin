//运用ava模块进行测试
/*导入测试模块ava 和要测试模块date_trans*/
import test from 'ava';
import * as date_trans from '../dist/date-trans';
/**
     *编写测试函数test测试is_leapyear方法 
     */
  test('is_leapyear test',t =>{
      t.is(date_trans.is_leapyear(2000),true);//测试is_leapyear方法 
  })
/**
 * 编写测试函数test测试get_year方法
 */
  test('get_year test',t =>{
    t.is(date_trans.get_year(1886038673400),2029);//测试get_year方法 
  })
/**
 * 编写测试函数test测试set_year方法 
 */
   test('set_year test',t =>{
    t.is(date_trans.set_year(1886038673400,2017),1507347473400);//测试set_year方法 
  })
/**
 * 编写测试函数test测试get_month方法 
 */
  test('get_month test',t =>{
    t.is(date_trans.get_month(1886038673400),10);//测试get_month方法 
  })
/**
 * 编写测试函数test测试set_month方法 
 */
  test('set_month test',t =>{
    t.is(date_trans.set_month(1886038673400,9),1883446673400);//测试set_month方法 
  })
/**
 * 编写测试函数test测试get_day_of_month方法 
 */
  test('get_day_of_month test',t =>{
    t.is(date_trans.get_day_of_month(1886038673400,9),7);//测试get_day_of_month方法 
  })
/**
 * 编写测试函数test测试set_day_of_month方法 
 */
test('set_day_of_month test',t =>{
    t.is(date_trans.set_day_of_month(1886038673400,9),1886211473400);//测试set_day_of_month方法 
  })
/**
 * 编写测试函数test测试get_hours方法 
 */
test('get_hours test',t =>{
    t.is(date_trans.get_hours(1886038673400),11);//测试get_hours方法 
  })
/**
 * 编写测试函数test测试set_hours方法 
 */
test('set_hours test',t =>{
    t.is(date_trans.set_hours(1886038673400,15),1886053073400);//测试set_hours方法 
  })
/**
 * 编写测试函数test测试get_minutes方法 
 */ 
test('get_minutes test',t =>{
    t.is(date_trans.get_minutes(1886038673400),37);//测试get_minutes方法 
  })
/**
 * 编写测试函数test测试set_minutes方法 
 */
test('set_minutes test',t =>{
    t.is(date_trans.set_minutes(1886038673400,50),1886039453400);//测试set_minutes方法 
  })
/**
 * 编写测试函数test测试get_seconds方法 
 */
test('get_seconds test',t =>{
    t.is(date_trans.get_seconds(1886038673400),53);//测试get_seconds方法 
  })
/**
 * 编写测试函数test测试get_seconds方法 
 */
test('set_seconds test',t =>{
    t.is(date_trans.set_seconds(1886038673400,50),1886038670400);//测试set_seconds方法 
  })
/**
 * 编写测试函数test测试get_milliseconds方法 
 */
test('get_milliseconds test',t =>{
    t.is(date_trans.get_milliseconds(1886038673400),400);//测试get_milliseconds方法 
  })
/**
 * 编写测试函数test测试set_milliseconds方法 
 */
test('set_milliseconds test',t =>{
    t.is(date_trans.set_milliseconds(1886038673400,800),1886038673800);//测试set_milliseconds方法 
  })
/**
 * 编写测试函数test测试get_dayOfWeek方法 
 */
test('get_dayOfWeek test',t =>{
    t.is(date_trans.get_dayOfWeek(1886038673400),0);//测试get_dayOfWeek方法 
  })
/**
 * 编写测试函数test测试get_dayOfWeek方法 
 */
test('get_days_in_month test',t =>{
    t.is(date_trans.get_days_in_month(1886038673400),31);//测试get_days_in_month方法 
  })
/**
 * 编写测试函数test测试parse方法 
 */
test('parse test',t =>{
    t.is(date_trans.parse('Thu Oct 12 2017 12:07:57 GMT+0800'),1507781277000);//测试parse方法 
  })
/**
 * 编写测试函数test测试parse方法 
 */
test('now test',t =>{
    t.is(date_trans.now(),new Date().getTime());//测试now方法 
  })
/**
 * 编写测试函数test测试get_day_of_week方法 
 */
test('get_day_of_week test',t =>{
    t.is(date_trans.get_day_of_week(1886038673400),0);//测试get_day_of_week方法 
  })
/**
 * 编写测试函数test测试get_timezone_offset方法 
 */
test('get_timezone_offset test',t =>{
    t.is(date_trans.get_timezone_offset(1886038673400),-480);//测试get_timezone_offset方法 
  })
/**
 * 编写测试函数test测试tm2str方法 
 */
test('tm2str test',t =>{
    t.is(date_trans.tm2str(1886038673400),"Sun Oct 07 2029 11:37:53 GMT+0800 (中国标准时间)");//测试tm2str方法 
  })
/**
 * 编写测试函数test测试tm2tmstr方法 
 */
test('tm2tmstr test',t =>{
    t.is(date_trans.tm2tmstr(1886038673400),"11:37:53 GMT+0800 (中国标准时间)");//测试tm2tmstr方法 
  })
/**
 * 编写测试函数test测试tm2tmstr方法 
 */
test('tm2local_str test',t =>{
    t.is(date_trans.tm2local_str(1886038673400),"2029-10-7 11:37:53");//测试tm2local_str方法 
  })
/**
 * 编写测试函数test测试tm2local_tmstr方法 
 */
test('tm2local_tmstr test',t =>{
    t.is(date_trans.tm2local_tmstr(1886038673400),"11:37:53");//测试tm2local_tmstr方法 
  })
/**
 * 编写测试函数test测试tm2isostr方法 
 */
test('tm2isostr test',t =>{
    t.is(date_trans.tm2isostr(1886038673400),"2029-10-07T03:37:53.400Z");//测试tm2isostr方法 
  })
/**
 * 编写测试函数test测试tm2json方法 
 */
test('tm2json test',t =>{
    t.is(date_trans.tm2json(1886038673400,10),"2029-10-07T03:37:53.400Z");//测试tm2json方法 
  })
/**
 * 编写测试函数test测试tm2json方法 
 */
test('valueof test',t =>{
    t.is(date_trans.valueof(1886038673400),1886038673400);//测试valueof方法 
  })