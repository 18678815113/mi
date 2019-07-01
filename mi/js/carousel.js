$(function () {
    $(".tab-container").hide()
    /*手机电话产品加载事件*/
    $(".carl-tab li:eq(0)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/phone.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*电视盒子产品加载事件*/
    $(".carl-tab li:eq(1)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/television.json", function (result) {
            var televisiondata = result.links;
            $(televisiondata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*电脑外设产品加载事件*/
    $(".carl-tab li:eq(2)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/computer.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*家电产品加载事件*/
    $(".carl-tab li:eq(3)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/home.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*出行穿戴产品加载事件*/
    $(".carl-tab li:eq(4)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/trip.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*智能及路由器产品加载事件*/
    $(".carl-tab li:eq(5)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/router.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*电源配件器产品加载事件*/
    $(".carl-tab li:eq(6)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/powersupply.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*健康儿童产品加载事件*/
    $(".carl-tab li:eq(7)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/health.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*耳机音箱产品加载事件*/
    $(".carl-tab li:eq(8)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/headset.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*耳机音箱产品加载事件*/
    $(".carl-tab li:eq(9)").mouseenter(function () {
        $(this).parent().parent().next().children().hide()
        $.getJSON("json/live.json", function (result) {
            var phonedata = result.links;
            $(phonedata).each(function (i) {
                $(".tab-container").append("" +
                    "<a href=\"\" id=\"submenu\">\n" +
                    "<img src=\"" + this.url + "\" alt=\"\" width=\"40px\" height=\"40px\">\n" +
                    "<span>" + this.name + "</span>\n" + "</a>"
                )
            })
            tabmouseleave();
        })
    })
    /*鼠标移出tab-container事件*/
    tabmouseleave = function () {
        $(".tab-container").show()
        $(".tab-container").mouseleave(function () {
            $(".tab-container").hide()
        })
    }
})