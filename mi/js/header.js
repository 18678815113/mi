$(function () {
    /*顶端购物车*/
    $(".mi-topbar-shopping a").mouseenter(function () {
        $(this).next().show(200);
    })
    $(".mi-topbar-shopping a").next().mouseleave(function () {
        $(this).hide(200)
    })
    //产品导航显示隐藏
    $(".mi-main-list-content").hide()
    $("#mi-main-list li").mouseenter(function () {
        $(".mi-main-list-content").show(100)
        $(".mi-main-list-content li").eq($(this).index()).slideDown().siblings().hide();
        if ($(this).text().trim() == "服务") {
            $(".mi-main-list-content").hide()
        }
        if ($(this).text().trim() == "社区") {
            $(".mi-main-list-content").hide()
        }
    })
    //产品导航栏移出隐藏
    $(".mi-main-list-content li").mouseleave(function () {
        $(".mi-main-list-content").hide(200)
        $(".mi-main-list-content li").eq($(this).index()).slideUp().siblings();
    })
})

