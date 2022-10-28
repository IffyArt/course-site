// Image filter 顯示
$(function () {
  $('.image-filter__button button').click(function () {
    // 取得目前點擊按鈕的 value 屬性內容
    var target = $(this).attr('value');

    $('.image-filter__list li').each(function () {
      // 運作一個時間為 300ms 透明度變更到 0 的動畫效果
      $(this).animate({ opacity: 0 }, 300, function () {
        // 將目前的這個 li 元素進行隱藏
        $(this).hide();
        // 判斷目前的這個 li 元素有沒有跟 target 一樣的 class 名稱，或者是判斷 target 是不是等於 'all'
        if ($(this).hasClass(target) || target == 'all') {
          // 將目前的這個 li 元素進行顯示
          $(this).show();
          // 運作一個時間為 300ms 透明度變更到 1 的動畫效果
          $(this).animate({ opacity: 1 }, 300);
        }
      });
    });
  });
});
