let swiper = new Swiper(".mySwiper", {
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
;(function(){
   $('.bottom').on('click','a',function(){
  $('.bottom a').removeClass('active')
   $(this).addClass('active')
     //显示隐藏 找到自定义属性
  let index= $(this).data('status')
//   console.log(index);
    $('main').eq(index).css("display","block").siblings('main').css("display",'none')                 
   })
 
})()