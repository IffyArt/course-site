// wrapper 區塊顯示
$(function () {
  // 隱藏除了 id=introduction 以外的區塊
  $('.wrapper>section[id!="introduction"]').hide();

  $('.nav>a').click(function () {
    $('.wrapper>section').hide();

    $($(this).attr('href')).show();

    $('.active').removeClass('active');

    $(this).addClass('active');

    // 讓原本的 HTML 不執行 JavaScript
    return false;
  });
});
