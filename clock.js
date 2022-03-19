function updateTime() {
    var time = new Date();
    var dname = time.getDay(),
        mo = time.getMonth(),
        yr = time.getFullYear(),
        dnum = time.getDate(),
        hr = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds(),
        pe = "AM";
        

    // 抓AM或PM
    if (hr >= 12) {
        pe = "PM";
    } else {
        pe = "AM"
    }

    // 轉換成兩位數
    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hr.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function startTime() {
    updateTime();
    window.setInterval("updateTime()", 1);
}