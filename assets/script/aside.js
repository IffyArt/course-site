// Aside 展開顯示
$(function () {
  $('.aside__trigger').click(function () {
    // 切換顯示自己 .active 的 class 名稱
    $(this).toggleClass('active');
    // 列印出自己這個元素的 下一個 元素
    console.log($(this).next());
    // 切換顯示自己下一個元素 .active 的 class 名稱
    $(this).next().toggleClass('active');
  });
});

// Aside go top 顯示
$(function () {
  // 在 window 的選擇項目上掛載滑動時的偵測事件
  $(window).scroll(function () {
    // 判斷目前滑動到的高度有沒有高於 300px
    if ($(window).scrollTop() > 300) {
      // 幫 .aside__top 的選擇器增加一個 active 的 class 名稱
      $('.aside__top').addClass('active');
    } else {
      // 幫 .aside__top 的選擇器增刪除 active 的 class 名稱
      $('.aside__top').removeClass('active');
    }
  });

  $('.aside__top').click(function () {
    // 對 html 進行一個動畫行為，將他目前的 scrollTop 導引到 0 的位子
    $('html').animate({ scrollTop: 0 }, 'slow'); /* 返回到最頂上 */

    // 讓原本的 HTML 不執行 JavaScript
    return false;
  });
});
