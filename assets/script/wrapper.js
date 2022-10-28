// wrapper 區塊顯示
$(function () {
  // 隱藏除了 id=introduction 以外的區塊
  $('.wrapper>section[id!="introduction"]').hide();

  // 讓 .nav>a 選擇器的項目新增點擊事件
  $('.nav>a').click(function () {
    // 讓 .wrapper > section 選擇器的項目都做隱藏
    $('.wrapper>section').hide();
    // 顯示目前按鈕
    console.log($(this));
    // 顯示目前按鈕的超連結屬性內容
    console.log($(this).attr('href'));
    // 先用 $(this).attr('href') 獲取到相對應的 id 如 #introduction，在用 show() 函示讓他顯示
    $($(this).attr('href')).show();

    // 讓 .nav>a.active 選擇器的項目都刪除 active 的 class 名稱
    $('.nav>a.active').removeClass('active');

    // 幫自己加上 active 這個 class 名稱
    $(this).addClass('active');

    // 讓原本的 HTML 不執行 JavaScript
    return false;
  });
});
