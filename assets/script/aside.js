// Aside 展開顯示
$(function () {
  $('.aside__trigger').click(function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  });
});

// Aside go top 顯示
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.aside__top').addClass('active');
    } else {
      $('.aside__top').removeClass('active');
    }
  });

  $('.aside__top').click(function () {
    $('html').animate({ scrollTop: 0 }, 'slow'); /* 返回到最頂上 */
    return false;
  });
});
