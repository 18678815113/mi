$(function () {
    $(".jd-list-tab .jd-lists:first-child").siblings().hide()
    $(".jd-list li").mouseenter(function () {
        $(".jd-list-tab .jd-lists").eq($(this).index()).show().siblings().hide()
        $(this).css('text-decoration', 'underline').siblings().css('text-decoration', 'none')
    })
    $(".comment-piece").hide()
    $(".hot-piece li").mouseenter(function () {
        $(this).children(".comment-piece").slideDown().show(300)
    })
    $(".hot-piece li").mouseleave(function () {
        $(this).children(".comment-piece").slideDown().hide(300)
    })
})