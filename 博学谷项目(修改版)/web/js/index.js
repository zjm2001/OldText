let swiper = new Swiper(".mySwiper", {
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

//底部切换内容
; (function () {
    $('.bottom').on('click', 'a', function () {
        $('.bottom a').removeClass('active')
        $(this).addClass('active')
        //显示隐藏 找到自定义属性
        let index = $(this).data('status')
        //   console.log(index);
        $('main').eq(index).css("display", "block").siblings('main').css("display", 'none')
    })

})()
    //分类界面切换效果
    ; (function () {
        $('.tab').on('click', 'a', function () {
            $(this).addClass('active').siblings('a').removeClass('active');
            let str=$(this).text()
            $('.introduce').text(`${str}在线就业班`)
           
        })
    })()
    //我的界面登录的js
    ;(function(){
        $('.card').on('click','a' ,function(){
            let index = $(this).data('index')
            if(index==='login'){
                $('.login').show()
            }else if(index === 'reg'){
                $('.reg').show()
            }
            $('.newbox').show()

        })
    })()
   