// Tooltip 顯示
$(function () {
  $('.tooltip').hover(
    function () {
      $('body').append('<div id="tooltip"><p></p></div>');

      $('#tooltip p').html($(this).attr('alt'));

      $('#tooltip').hide();

      $('#tooltip').css(
        'top',
        $(this).offset().top - $('#tooltip').height() - 18,
      );

      $('#tooltip').css(
        'left',
        $(this).offset().left - ($('#tooltip').width() - $(this).width()) / 2,
      );

      $('#tooltip').stop().fadeIn();
    },
    function () {
      $('#tooltip').remove();
    },
  );
});
