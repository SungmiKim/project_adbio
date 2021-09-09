// 헤더 메뉴
function showMenu() {
  if ($("#header .header_area").height() <= 100) {
    $("#header .header_area").stop().animate({ height: "426px" }, "350");
    $("#header .header_area").addClass("on");
    $("#header .header_area").addClass("active");
    $(".menu_bg").fadeIn();
  }
}

// 언어 선택
function openLang() {
  $(".balloon").toggleClass("balloon_show");
}

$(document).ready(function () {
  // 헤더 메뉴
  $("#menu ul li a").bind("mouseenter focusin", function () {
    showMenu();
  });
  $(".side_btn .munu_min").bind("click", function () {
    showMenu();
  });

  $("#header .header_area").bind("mouseleave", function () {
    if ($("#header .header_area").height() > 100) {
      $("#header .header_area").stop().animate({ height: "100px" }, 150);
      $(".menu_bg").fadeOut();
      $("#header .header_area").removeClass("on");
      if (swiper.realIndex === 0) {
        $("#header .header_area").removeClass("active");
      }
    }
  });

  $(".language").click(function () {
    openLang();
  });

  // 언어 선택 사라짐
  $("html").click(function (e) {
    if (!$(e.target).hasClass("lang_icon")) {
      $(".balloon").removeClass("balloon_show");
    }
  });

  //  Footer 관련 사이트
  $(".dropdown").click(function () {
    $(".dropdown").toggleClass("on");
  });
});
