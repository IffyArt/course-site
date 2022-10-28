// Tooltip 顯示
$(function () {
  $('.tooltip').hover(
    function () {
      // 在 body 中建立一個 id 為 tooltip 的區塊
      $('body').append('<div id="tooltip"><p></p></div>');

      // 將選擇器 #tooltip p 的 html 內容更換成目前元素的 alt 屬性內容
      $('#tooltip p').html($(this).attr('alt'));

      // 將選擇器 #tooltip 的元素進行隱藏
      $('#tooltip').hide();

      // 將選擇器 #tooltip 的元素靠上(top)，設置為自身(this 目前只向 .tooltip 的區塊，因為沒有使用函示操作)的 offset(在螢幕上的位移)的top(上方定位點)，此時若是只接使用作為定位將會與區塊重疊，因此需要再刪除 #tooltip 的高度，最後在依照實際想要的定位點向上偏移

      $('#tooltip').css(
        'top',
        $(this).offset().top - $('#tooltip').height() - 30,
      );

      // 將選擇器 #tooltip 的元素靠左(left)，設置為自身(this 目前只向 .tooltip 的區塊，因為沒有使用函示操作)的 offset(在螢幕上的位移)的left(左方定位點)，再減去目前區塊的寬度與自身的一半使區塊置中
      $('#tooltip').css(
        'left',
        $(this).offset().left - ($('#tooltip').width() - $(this).width()) / 2,
      );

      // 將選擇器 #tooltip 的元素進行浮出
      $('#tooltip').fadeIn();
    },
    function () {
      // 刪除這個選擇器的區塊
      $('#tooltip').remove();
    },
  );
});
