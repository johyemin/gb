$(function(){
  $(".ham").click(function () {
    $(".submenu").stop().animate({ right: '0' }, 1000)
  })
  
  $(".close").click(function () {
    $(".submenu").stop().animate({ right: '-100%' }, 1000)
  })
///////
});