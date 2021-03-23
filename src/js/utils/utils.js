/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2017-04-01 11:40:20
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */

let utils = {}
/**
 * [stringFomat 字符串格式化]
 * @type {Object}
 */
utils.stringFomat = {
    /**
     * [camelcaseToHyphen 驼峰转化成-连接]
     * @param  {[type]} str [驼峰字符串]
     * @return {[type]}     [连接-字符串]
     */
    camelcaseToHyphen(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    },
    /**
     * [numToCard 转化成卡号]
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    numToCard(string) {
        return string.replace(/(\d{4})(?=\d)/g, "$1" + " ")
    },
    /**
     * [cardToNum 卡号转化成字符串]
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    cardToNum(string) {
        return string.replace(/\s/ig, "")
    }

}
/**
 * [dateFormat 时间格式化处理]
 * @type {Object}
 */
utils.dateFormat = {
    /**
     * [format description]
     * @param  {[Date]} date [需要格式的对象]
     * @param  {[String]} fmt  [例子：yyyy-MM-dd hh:mm:ss 连接上做处理]
     * @return {[String]}      [返回fmt的时间]
     */
    format(date, fmt) {
        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    },
      /*new Date()转化为2018-09-18*/
    DateToStringST(date) {
        date = date || null;
        var sDate = new Date(date);
        var seperator1 = "-";
        var sMonth = sDate.getMonth() + 1;
        if (sMonth >= 1 && sMonth <= 9) {
            sMonth = "0" + sMonth;
        }
        var strDate = sDate.getDate();
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        return sDate.getFullYear() + seperator1 + sMonth + seperator1 + strDate;
    },
    /*1417708800000转化成2014-12-05 00:00:00*/
    formatDate3(timestamp, isymd) {
        if (timestamp) {
            var date = new Date(parseInt(timestamp));
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var mi = date.getMinutes();
            var s = date.getSeconds();
            if (!isymd) { //是否年月日
                return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d) + ' ' + (h < 10 ? ('0' + h) : h) + ':' + (mi < 10 ? ('0' + mi) : mi) + ':' + (s < 10 ? ('0' + s) : s);
            } else {
                return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
            }

        } else
            return;
    },
    //2016-07-22 to Date
    stringToDate(string) {
        var stringObj = string.split("-");
        return new Date(stringObj[0], (parseInt(stringObj[1]) - 1), stringObj[2]);
    },
    /*19201101转换成1970-11-01 或者 19201101121212转换成1970-11-01 12:12:12*/
    dateToString(date) {
        let odate = date.toString();
        if (odate == 0) return "无";
        if (odate.indexOf('-') > 0) return odate;
        if (odate.length == 14) {
            return odate.substr(0, 4) + "-" + odate.substr(4, 2) + "-" + odate.substr(6, 2) + " " + odate.substr(8, 2) + ":" + odate.substr(10, 2) + ":" + odate.substr(12, 2);
        } else {
            return odate.substr(0, 4) + "-" + odate.substr(4, 2) + "-" + odate.substr(6, 2);
        }

    },
    /*192011转换成1970-11*/
    monthToString(date) {
        if (date == 0) return "无";
        if (date.indexOf('-') > 0) return date;
        return date.substr(0, 4) + "-" + date.substr(4, 2);
    },
    /*192011转换成1970年11月*/
    monthToString2(date) {
        if (date == 0) return "无";
        if (date.indexOf('-') > 0) return date;
        return date.substr(0, 4) + "年" + date.substr(4, 2) + "月";
    },
    /*19201111转换成1970年11月11日*/
    monthToString3(date) {
        if (date == 0) return "无";
        if (date.indexOf('-') > 0) return date;
        return date.substr(0, 4) + "年" + date.substr(4, 2) + "月" + date.substr(6, 2) + "日";
    },
    /*191441转换成19:14:41*/
    timeToString(time) {
        if (time == 0) return time;
        if (time.indexOf(':') > 0) return time;
        return time.substr(0, 2) + ":" + time.substr(2, 2) + ":" + time.substr(4, 2);
    },
    /*
     *   功能:DateAdd功能.
     *   参数:interval,字符串表达式，表示要添加的时间间隔.
     *   参数:number,数值表达式，表示要添加的时间间隔的个数.
     *   参数:date,时间对象.
     *   返回:新的时间对象.
     *   var now = new Date();
     *   var newDate = DateAdd( "d", 5, now);
     *---------------  DateAdd(interval,number,date)   -----------------
     */
    dateAdd(interval, number, date) {
        switch (interval) {
            case "y":
                {
                    date.setFullYear(date.getFullYear() + number);
                    return date;
                    break;
                }
            case "q":
                {
                    date.setMonth(date.getMonth() + number * 3);
                    return date;
                    break;
                }
            case "M":
                {
                    date.setMonth(date.getMonth() + number);
                    return date;
                    break;
                }
            case "w":
                {
                    date.setDate(date.getDate() + number * 7);
                    return date;
                    break;
                }
            case "d":
                {
                    date.setDate(date.getDate() + number);
                    return date;
                    break;
                }
            case "h":
                {
                    date.setHours(date.getHours() + number);
                    return date;
                    break;
                }
            case "m":
                {
                    date.setMinutes(date.getMinutes() + number);
                    return date;
                    break;
                }
            case "s":
                {
                    date.setSeconds(date.getSeconds() + number);
                    return date;
                    break;
                }
            default:
                {
                    date.setDate(date.getDate() + number);
                    return date;
                    break;
                }
        }
    },
    /**
     * [contrastDate 时间对比]
     * @param  {["YYYY-MM-DD"]} a [第一个日期]
     * @param  {["YYYY-MM-DD"]} b [第二个日期]
     * @param  {[int]} number [间隔日期]
     * @param  {[int]} interval [间隔日期1:天,2:周，3:月，4:年]
     * @return {[Boolean]}   [如果第一个大于第二 false  反之 true]
     */
    contrastDate(a, b, number, interval, day) {
        var num = parseInt(number ? number : 0);
        var addTime;
        var arr = a.split("-");
        var startTime = new Date(arr[0], arr[1], arr[2]);
        var startTimes = startTime.getTime();
        var arrs = b.split("-");
        var endTime = new Date(arrs[0], arrs[1], arrs[2]);
        var endTimes = endTime.getTime();
        switch (interval) {
            case "1":
                {
                    addTime = utils.dateFormat.dateAdd("d", num + day, startTime);
                    break;
                }
            case "2":
                {
                    addTime = utils.dateFormat.dateAdd("w", num, startTime);
                    addTime = utils.dateFormat.dateAdd("d", day, addTime);
                    break;
                }
            case "3":
                {
                    addTime = utils.dateFormat.dateAdd("M", num, startTime);
                    addTime = utils.dateFormat.dateAdd("d", day, addTime);
                    break;
                }
            case "4":
                {
                    addTime = utils.dateFormat.dateAdd("y", num, startTime);
                    addTime = utils.dateFormat.dateAdd("d", day, addTime);
                    break;
                }
            default:
                {
                    break;
                }
        }
        var addTimes = addTime.getTime();
        if (parseInt(addTimes) > parseInt(endTimes)) {
            return true;
        } else {
            return false;
        }
    },
}
/**
 * [Rmb description 人民币]
 * @type {Object}
 */
utils.Rmb = {
    /**
     * [upDigit 数字金额大写转换(可以处理整数,小数,负数)]
     * @param  {[type]} n [description]
     * @return {[type]}   [description]
     */
    upDigit(n) {
        // var fraction = ['角', '分'];
        // var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        // var unit = [
        //     ['元', '万', '亿'],
        //     ['', '拾', '佰', '仟']
        // ];
        // var head = n < 0 ? '欠' : '';
        // n = Math.abs(n); //绝对值
        // var s = '';
        // for (var i = 0; i < fraction.length; i++) {
        //     var mulvalue = this.mul(n, Math.pow(10, i + 1));
        //     s += (digit[Math.floor(mulvalue) % 10] + fraction[i]).replace(/零./, '');
        // }
        // s = s || '整';
        // n = Math.floor(n);
        // for (var i = 0; i < unit[0].length && n > 0; i++) {
        //     var p = '';
        //     for (var j = 0; j < unit[1].length && n > 0; j++) {
        //         p = digit[n % 10] + unit[1][j] + p;
        //         n = Math.floor(n / 10);
        //     }
        //     s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        // }
        // return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
        if(Math.abs(n)<=0){
            return;
        }
        var unit = "仟佰拾亿仟佰拾万仟佰拾元角分", 
        str = "";
        n += "00";  
        var a = n.indexOf('-');
        if(a != -1){
            n = n.substring(1);
            var indexpoint = n.indexOf('.');  // 如果是小数，截取小数点前面的位数
            if (indexpoint >= 0){
                n = n.substring(0, indexpoint) + n.substr(indexpoint+1, 2);   // 若为小数，截取需要使用的unit单位
            }           
            unit = unit.substr(unit.length - n.length);  // 若为整数，截取需要使用的unit单位
            for (var i=0; i < n.length; i++){
                str += "零壹贰叁肆伍陆柒捌玖".charAt(n.charAt(i)) + unit.charAt(i);  //遍历转化为大写的数字
            }
            return "负"+str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万/g, "$1").replace(/^元零?|零分/g, "").replace(/元$/g, "元整"); // 替换掉数字里面的零字符，得到结果
        }else{
            var indexpoint = n.indexOf('.');  // 如果是小数，截取小数点前面的位数
            if (indexpoint >= 0){
                n = n.substring(0, indexpoint) + n.substr(indexpoint+1, 2);   // 若为小数，截取需要使用的unit单位
            }       
            unit = unit.substr(unit.length - n.length);  // 若为整数，截取需要使用的unit单位
            for (var i=0; i < n.length; i++){
                str += "零壹贰叁肆伍陆柒捌玖".charAt(n.charAt(i)) + unit.charAt(i);  //遍历转化为大写的数字
            }
            // return str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g,"").replace(/元$/g, "元整");
            return str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万/g, "$1").replace(/^元零?|零分/g, "").replace(/元$/g, "元整"); // 替换掉数字里面的零字符，得到结果
        }
    },
    add(a, b) { //浮点数防止计算偏差
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (this.mul(a, e) + this.mul(b, e)) / e;
    },
    sub(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (this.mul(a, e) - this.mul(b, e)) / e;
    },
    mul(a, b) {

        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    },
    div(a, b) {
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
            f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), this.mul(c / d, Math.pow(10, f - e));
    },

    /**
     * [formatRMB 格式化]
     * @param  {[muber]} money  [传入需要格式化的钱（分为单位）]
     * @param  {[string]} format [thousands：转换千分位,tenthousand:转换万元,空保留小数]
     * @return {[string]}        [返回格式化后的钱]
     */
    formatRMB(money, format) {
        var RMB = null;
        if (isNaN(money)) {
            RMB = 0;
        } else {
            RMB = (Number(money)).toFixed(2); //分转换成元保留两位小数
            switch (format) {
                case "thousands":
                    RMB = (RMB + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
                    break;
                case "tenthousand":
                    RMB = parseInt(RMB) >= 10000 ? (parseInt(RMB) / 10000) + "万" : parseInt(RMB);
                    break;
                default:
                    RMB = RMB;
            }
        }
        return RMB
    },
        /**
     * [tenthousand 格式化]
     * @param  {[muber]} money  [传入需要格式化的钱（分为单位）]
     * @param  {[string]} format [thousands：转换千分位,tenthousand:转换万元,空保留小数]
     * @return {[string]}        [返回格式化后的钱]
     */
    tenthousand(money) {
        if (parseInt(money) >= 10000) {
            return (parseInt(money) / 10000) + "万";
        }else{
            return parseInt(money)
        }
    },
    /**
     * [rmbYF 计算元与分]
     * @param  {[muber]} money [传入需要格式化的钱]
     * @return {[object]}   RMB     [存取值]
     */
    rmbYF(money) {
        var RMB = {};
        if (isNaN(money)) {
            RMB.YUAN = 0;
            RMB.FEN = "00";
        } else {
            var money = (Number(money) / 100).toFixed(2); //分转换成元保留两位小数
            RMB.YUAN = money.split(".")[0];
            RMB.FEN = money.split(".")[1];
        }
        return RMB
    }
};

/**
 * [Input 输入替换]
 * @type {Object}
 */
utils.Input = {

    clearNoPriceMax6(str) {

        str = str.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d+)\.(\d\d).*$/, '$1.$2'); //保留两位小数

        var _reg = /^(.){0,6}$/;
        if (!_reg.test(str)) {
            str = str.substr(0, 6);
            return;
        }
    },

    clearNoPriceMax11(str) {

        str = str.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d+)\.(\d\d).*$/, '$1.$2'); //保留两位小数

        var _reg = /^(.){0,11}$/;
        if (!_reg.test(str)) {
            str = str.substr(0, 11);
            return;
        }
    },
    clearNoPriceMax10(str) {
        str = str.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d+)\.(\d\d).*$/, '$1.$2'); //保留两位小数

        var _reg = /^(.){0,10}$/;
        if (!_reg.test(str)) {
            str = str.substr(0, 10);
            return;
        }
    },
    /**
     * [clearNoPricePub 自定义小数点两位]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoPricePub(str,maxP) {//str 金额，maxP最大可输入金额
        str = str.replace(/^[0][0-9]/g, "") //清除以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d+)\.(\d\d).*$/, '$1.$2'); //保留两位小数
        if (str > maxP) {
            var newValue = str.substr(0, str.length - 1);
            if (newValue > maxP) {
                str = maxP;
            } else {
                str = newValue;
            }
        }
        // console.log(str);
        return str;
    },

    /**
     * [clearNoPrice 小数点两位]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoPrice(str) {
        str = str.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d+)\.(\d\d).*$/, '$1.$2'); //保留两位小数
        return str;
    },
      /**
     * [clearNoPricemany 可以有很多小数]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoPricemany(str) {
        str = str.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d+)\.(\d{1,6}).*$/, '$1.$2'); //保留两位小数
        return str;
    },
    /**
     * [clearSpace description]
     * @param  {[type]} obj [description]
     * @return {[type]}     [description]
     */
    clearSpace(str) {
        str = str.replace(/\s/g, "") //清楚空格
        return str;
    },
    /**
     * [clearNoInt 非0整数]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoInt(str) {
        str = str.replace(/^[0]/g, "")
        str = str.replace(/\D/g, '');
        return str;
    },
    /**
     * [clearNoInteger 整数]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoInteger(str) {
        str = str.replace(/\D/g, '');
        return str;
    },
    /**
     * [clearNoChinese 只能输入英文字母和数字,不能输入中文]
     * @param  {[Object]} obj [输入对象]
     * @return {[type]}     [description]
     */
    clearNoChinese(str) {
        str = str.replace(/[^\w\.\/]/ig, '');
        return str;
    },
    /**
     * [clearNoInt 只能输入字母和汉字]
     */
    clearNoLetterChinese(str) {
        str = str.replace(/[^\a-\z\A-\Z\u4E00-\u9FA5]/g, '')
        return str;
    },
    /**
     * [clearNoInt 只能输入字母,汉字和数字]
     */
    clearNoLetterChineseNumber(str) {
        str = str.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '')
        return str;
    },
    /**
     * [clearDiscount 只能输入0.1~9.9]
     */
    clearDiscount(str) {
        //折扣：只能输入0.1~9.9
        str = str.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/^(\d)(\d+).*$/, '$1');
        str = str.replace(/\.{1,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d{1})\.(\d).*$/, '$1.$2');
        return str;
    },
    clearAmount(str) {
        str = str.replace(/^[0][0-9]/g, "") //清楚以0开始的非小数的字符
        str = str.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        str = str.replace(/^\./g, ""); //验证第一个字符是数字而不是
        str = str.replace(/^(\d\d\d\d\d\d)(\d+).*$/, '$1');
        str = str.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        str = str.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        str = str.replace(/^(\d{1,6})\.(\d\d).*$/, '$1.$2');
        return str;
    },
    /*只允许输入@.-和英文数字*/
    clearChinese(str) {
        str = str.replace(/[^\a-\z\A-\Z0-9\-\.\@]/g, '');
        return str;
    },
    /*只允许输入字母和数字*/
    clearNoLetterNumber(str) {
        str = str.replace(/[^\a-\z\A-\Z0-9]/g, '');
        return str;
    },
    cardNoFormat(str) {
        str = str.replace(/\s/g,'').replace(/[^\d]/g,'').replace(/(\d{4})(?=\d)/g,'$1 ');
        return str;
     },
     clearAllSpace(str) {
        str = str.replace(/[\ |\-]/g,"");
        return str;
     },
     telNoFormat(str) {
         console.log("str="+str+" "+str.length)
        if(str.length == 4){
            str = str.replace(/(\d{3})(?=\d)/g,'$1 ');
            return str;
        }else if(str.length == 9){
            console.log("str="+str+" "+str.length)
            str = str.replace(/(\d{4})(?=\d)/g,'$1 ');
            return str;
        }
        return str;
     },
    //
    // clearNoLetterNumber(str) {
    //     str = str.replace(/[^\a-\z\A-\Z0-9]/g, '');
    //     return str;
    // },
}
/**
 * [valid 验证类]
 * @type {Object}
 */
utils.Valid = {
    /**
     * [isNum 是否位数字]
     * @param  {[string]}  num [description]
     * @return {Boolean}     [description]
     */
    isNum(num) { //# 是否为数
        return !isNaN(num);
    },
    /**
     * [isEmail description]
     * @param  {[type]}  mail [description]
     * @return {Boolean}      [description]
     */
    isEmail(mail) { //# 是否为 邮箱
        return /^([a-z0-9]+[_\-\.]?)*[a-z0-9]+@([a-z0-9]+[_\-\.]?)*[a-z0-9]+\.[a-z]{2,5}$/i.test(mail);
    },
    /**
     * [isFloat 浮点数]
     * @param  {[type]}  num [description]
     * @return {Boolean}     [description]
     */
    isFloat(num) { //# 是否为 浮点数
        return /^(([1-9]\d*)|(\d+\.\d+)|0)$/.test(num);
    },
    /**
     * [isInt 正整数]
     * @param  {[type]}  num [description]
     * @return {Boolean}     [description]
     */
    isInt(num) { //# 是否为 正整数
        return /^[1-9]\d*$/.test(num);
    },
    /**
     * [isChinese 是否全为汉字]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isChinese(str) { //# 是否全为 汉字
        return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+$/gi.test(str);
    },
    /**
     * [isChinese 是否金额]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isAmount(str) {
        if (str == "0" || str == "0." || str == "0.0" || str == "0.00") {
            return false;
        }
        return /^([1-9][\d]{0,}|0)(\.[\d]{1,2})?$/gi.test(str);
    },

    /**
     * [isChinese 是否为中文名称]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isChineseName(str) {
        return /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0]{2,5})+([·|•]([\u4E00-\u9FA5]|[\uFE30-\uFFA0]){2,5})*$/gi.test(str);
    },
    /**
     * [isBankAccount 是否为银行账号]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isBankAccount(str) {
        return /^\d{8,32}$/gi.test(str);
    },
    /**
     * [isCEN  是否为中文数字英文符号]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCENP(str) {
        return /^[\，\。\！\？\：\,\.\!\?\:\·\¥\%\u4E00-\u9FA5A-Za-z0-9_]+$/gi.test(str);
    },
    /**
     * [isCEN  是否为中文数字英文]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCEN(str) {
        return /^[\u4E00-\u9FA5A-Za-z0-9_]+$/gi.test(str);
    },

    /**
     * [isCEN  是否为中文英文]
     * @param  {[type]}  str [description]
     * @return {Boolean}     [description]
     */
    isCE(str) {
        return /^[\u4E00-\u9FA5A-Za-z_]+$/gi.test(str);
    },
    //
    /**
     * [isIdCard 身份证验证]
     * @param {[type]} gets [description]
     * @return {Boolean}     [description]
     */
    isIdCard(gets) {
        var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子;
        var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值，10代表X;
        if (gets.length == 15) {
            return isValidityBrithBy15IdCard(gets);
        } else if (gets.length == 18) {
            var a_idCard = gets.split(""); // 得到身份证数组
            if (isValidityBrithBy18IdCard(gets) && isTrueValidateCodeBy18IdCard(a_idCard)) {
                return true;
            }
            return false;
        }
        return false;

        function isTrueValidateCodeBy18IdCard(a_idCard) {
            var sum = 0; // 声明加权求和变量
            if (a_idCard[17].toLowerCase() == 'x') {
                a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
            }
            for (var i = 0; i < 17; i++) {
                sum += Wi[i] * a_idCard[i]; // 加权求和
            }
            var valCodePosition = sum % 11; // 得到验证码所位置
            if (a_idCard[17] == ValideCode[valCodePosition]) {
                return true;
            }
            return false;
        }

        function isValidityBrithBy18IdCard(idCard18) {
            var year = idCard18.substring(6, 10);
            var month = idCard18.substring(10, 12);
            var day = idCard18.substring(12, 14);
            var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
            // 这里用getFullYear()获取年份，避免千年虫问题
            if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
                return false;
            }
            return true;
        }

        function isValidityBrithBy15IdCard(idCard15) {
            var year = idCard15.substring(6, 8);
            var month = idCard15.substring(8, 10);
            var day = idCard15.substring(10, 12);
            var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
            // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
            if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
                return false;
            }
            return true;
        }
    },
    /**
     * [isMobile  手机验证]
     * @param  {[type]} gets [description]
     * @return {[type]}      [description]
     */
    isMobile(gets) {
        return /^1[0-9]{10}$/.test(gets);
    },
    /**
     * [isTel 验证座机]
     * @param  {[type]}  tel [description]
     * @return {Boolean}     [description]
     */
    isTel(tel) { //# 是否为 电话
        return /^\d{3,4}-\d{7,8}(-\d{1,6})?$/.test(tel);
    },
    /**
     * [isDiscount 验证折扣金额]
     * @param  {[type]}  text [description]
     * @return {Boolean}     [description]
     */
    isDiscount(text) { //# 是否为 折扣金额
        return /^[1-9](\.[1-9])?|0\.[1-9]$/.test(text);
    },
    /**
     * [isPrice校验价格和金额的方法]
     * @param  {[type]}  price [description]
     * @return {Boolean}       [description]
     */
    isPrice(price) {
        if (price == "0" || price == "0." || price == "0.0" || price == "0.00") {
            price = "0";
            return true;
        } else {
            var index = price.indexOf("0");
            var length = price.length;
            if (index == 0 && length > 1) { /*0开头的数字串*/
                var reg = /^[0]{1}[.]{1}[0-9]{1,2}$/;
                if (!reg.test(price)) {
                    return false;
                } else {
                    return true;
                }
            } else { /*非0开头的数字*/
                var reg = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;
                if (!reg.test(price)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        }
    },

    /**
     * [isPriceNumber 是否是金额(只有数字和小数点)]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    isPriceNumber(val){
        var reg = /^\d+(\.\d+)?$/;
        if(reg.test(val)){
            return true
        }else{
            return false
        }
    },
    /**
     * [isPlateNumber 车牌号验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    isPlateNumber(gets) {
        var re = /^[\u4e00-\u9fa5]{1}[a-zA-Z]{1}[a-zA-Z_0-9]{5}$/; //车牌号
        if (gets.search(re) == -1) {
            return false;
        } else {
            return true;
        }
    },
    /**
     * [isName 姓名验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    isName(gets) {
        return /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/.test(gets);
    },
    /**
     * [passCheck 密码验证]
     * @param  {[type]} gets [description]
     * @return {[Boolean]}      [description]
     */
    passCheck(gets) {
        var number = 0,
            letter = 0,
            other = 0,
            regs = /^[a-zA-Z0-9]|[!\$&'\(\)\*\+,.;:}{\/\=-@#~]$/;
        for (var i = gets.length - 1; i >= 0; i--) {
            var charater = gets.charCodeAt(i);
            if (charater >= 48 && charater <= 57) {
                //统计数字
                number++;
            } else if ((charater >= 65 && charater <= 90) || (charater >= 97 && charater <= 122)) {
                //统计字母
                letter++;
            } else {
                other++;
            }
        }
        if (number >= 1 && letter >= 1 && other >= 1 && regs.test(gets) && gets.length >= 8) {
            //密码格式为8位数字+字母+字符的组合
            return true;
        }
        return false;
        //return /^\d[a-zA-Z][!\$&'\(\)\*\+,.;:}{\/\=-@#~]$/; 
    },
    /**
     * [contrastDate 时间对比]
     * @param  {["YYYY--MM-DD"]} a [第一个日期]
     * @param  {["YYYY--MM-DD"]} b [第二个日期]
     * @param  {[int]} number [间隔日期天]
     * @return {[Boolean]}   [如果第一个大于第二 false  反之 true]
     */
    contrastDate(a, b, number) {
        var num = number ? number : 0;
        var arr = a.split("-");
        var startTime = new Date(arr[0], arr[1] - 1, arr[2]);
        var startTimes = startTime.getTime();
        var arrs = b.split("-");
        var endTime = new Date(arrs[0], arrs[1] - 1, arrs[2]);
        var endTimes = endTime.getTime();
        if (num != 0) {
            var datenum = num * 24 * 60 * 60 * 1000;
            if (parseInt(startTimes) + parseInt(datenum) >= parseInt(endTimes)) {
                return true;
            } else {
                return false;
            }
        } else {
            if (parseInt(startTimes) <= parseInt(endTimes)) {
                return true;
            } else {
                return false;
            }
        }
    }
};

// deepCopy
utils.deepCopyArray = function(data) {
    let o = [];
    for (let i = 0; i < data.length; i++) {
        o.push(data[i]);
    }
    return o;
}
//进行经纬度转换为距离的计算


//计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
utils.getDistance = function(lat1, lng1, lat2, lng2) {
    function Rad(d) {
        return d * Math.PI / 180.0; //经纬度转换成三角函数中度分表形式。
    }
    var radLat1 = Rad(lat1);
    var radLat2 = Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Rad(lng1) - Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里
    //s=s.toFixed(4);
    return s;
}

/*
//对象深拷贝,
p:拷贝的对象
s:拷贝后的对象
*/

utils.copy = function(s, p) {
    var s = s || {}; //判断s对象是否存在，不存在则定义s为空对
    　　
    for (let prop in p) {　　　　
        if (typeof p[prop] == 'object') {　　　　　　
            s[prop] = (p[prop].constructor === Array) ? [] : {}; //三元运算，将s[prop]初始化为数组或者对象
            utils.copy(s[prop], p[prop]);　　　　
        } else {　　　　　　
            s[prop] = p[prop];　　　　
        }
    }
    return s;
}

export default utils