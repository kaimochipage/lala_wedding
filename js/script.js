"use strict"
{
  //はみ出し要素検出
  document.querySelectorAll('*').forEach(el => el.clientWidth > document.body.clientWidth ? console.log(el) : null);"use strict"

  //スクロール幅検出
  $(function() {
    $(window).scroll(function() {
      $(".scroll-block").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt + 300) {
          $(this).addClass("blockIn");
        }
      });
    });
  });
}