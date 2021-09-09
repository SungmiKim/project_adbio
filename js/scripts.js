// 헤더 메뉴
function showMenu() {
  if ($("#header .header_area").height() <= 100) {
    var windowWidth = $(window).width();
    if (windowWidth <= 960) {
      $("#header .header_area").stop().animate({ height: "100vh" }, "350");
    } else {
      $("#header .header_area").stop().animate({ height: "426px" }, "350");
    }
    $("#header .header_area").addClass("on");
    $("#header .header_area").addClass("active");
    $(".menu_bg").fadeIn();
  }
}

function closeMenu() {
  if ($("#header .header_area").height() > 100) {
    $("#header .header_area").stop().animate({ height: "100px" }, 150);
    $(".menu_bg").fadeOut();
    $("#header .header_area").removeClass("on");
    $("#menu .menu_step01 .wrap").removeClass("show");
    if (swiper.realIndex === 0) {
      $("#header .header_area").removeClass("active");
    }
  }
}
// 모바일 메뉴
function dropMoMenu(num) {
  $("#menu .menu_step01 .wrap:not(.menu0" + num + " .wrap)").removeClass(
    "show"
  );
  $("#menu .menu0" + num + " .wrap").toggleClass("show");
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
    var windowWidth = $(window).width();
    if (windowWidth <= 960) {
      closeMenu();
    }
  });

  $("#header .header_area").bind("mouseleave", function () {
    var windowWidth = $(window).width();
    if (windowWidth > 960) {
      closeMenu();
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

  // 모바일 헤더 메뉴
  // $("#menu .menu_step01 .wrap span").click(function () {

  //   if ($(this).parent().siblings(".sub_wrap").css("display", "block")) {
  //     $(this).parent().removeClass("show");
  //   } else {
  //     $(this).parent().addClass("show");
  //   }
  // });

  //  Footer 관련 사이트
  $(".dropdown").click(function () {
    $(".dropdown").toggleClass("on");
  });
});
