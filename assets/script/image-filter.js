// Image filter 顯示
$(function () {
  $('.image-filter__button button').click(function () {
    var target = $(this).attr('value');

    $('.image-filter__list li').each(function () {
      $(this).animate({ opacity: 0 }, 300, function () {
        $(this).hide();
        if ($(this).hasClass(target) || target == 'all') {
          $(this).show();
          $(this).animate({ opacity: 1 }, 300);
        }
      });
    });
  });
});
