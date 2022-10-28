// Accordion list 顯示
$(function () {
  // 將 .accordion-list > li > .answer 這個選擇器的元素都進行隱藏
  $('.accordion-list > li > .answer').hide();

  // 將 .accordion-list > li 這個選擇器的元素都掛載點擊事件
  $('.accordion-list > li').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').find('.answer').slideUp();
    } else {
      $('.accordion-list > li.active .answer').slideUp();
      $('.accordion-list > li.active').removeClass('active');
      $(this).addClass('active').find('.answer').slideDown();
    }

    // 讓原本的 HTML 不執行 JavaScript
    return false;
  });
});
