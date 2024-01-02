$(function(){
  $(".ham").click(function () {
    $(".submenu").stop().animate({ right: '0' }, 1000)
  })
  
  $(".close").click(function () {
    $(".submenu").stop().animate({ right: '-100%' }, 1000)
  })

  $(".slide").slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: false,
    responsive: [
        // 배열 안에 객체를 넣는다
        {
            // 반응형 잡는 법
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        },


    ]
})

///////
});