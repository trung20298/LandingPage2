(function ($) {
  /**
   * Carousel social footer
   */
  function carousel_init() {
    $(".owl-carousel").each(function () {
      var slider = $(this);
      var defaults = {
        // direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
      };
      var config = $.extend({}, defaults, slider.data("plugin-options"));
      // Initialize Slider
      slider.owlCarousel(config).addClass("owl-carousel-init");
    });
  }

  /*** RUN ALL FUNCTION */
  /*doc ready*/
  $(document).ready(function () {
    carousel_init();
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("#header-nav").addClass("isSticky");
    } else if ($(window).scrollTop() < 60) {
      $("#header-nav").removeClass("isSticky");
    }
  });
})(jQuery);
(function ($) {
  /**
   * Carousel social footer
   */
  function carousel_init() {
    $(".owl-carousel").each(function () {
      var slider = $(this);
      var defaults = {
        // direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
      };
      var config = $.extend({}, defaults, slider.data("plugin-options"));
      // Initialize Slider
      slider.owlCarousel(config).addClass("owl-carousel-init");
    });
  }

  /*** RUN ALL FUNCTION */
  /*doc ready*/
  $(document).ready(function () {
    carousel_init();
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("#header-nav").addClass("isSticky");
    } else if ($(window).scrollTop() < 60) {
      $("#header-nav").removeClass("isSticky");
    }
  });
})(jQuery);
(function ($) {
  /**
   * Carousel social footer
   */
  function carousel_init() {
    $(".owl-carousel").each(function () {
      var slider = $(this);
      var defaults = {
        // direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
      };
      var config = $.extend({}, defaults, slider.data("plugin-options"));
      // Initialize Slider
      slider.owlCarousel(config).addClass("owl-carousel-init");
    });
  }

  /*** RUN ALL FUNCTION */
  /*doc ready*/
  $(document).ready(function () {
    carousel_init();
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("#header-nav").addClass("isSticky");
    } else if ($(window).scrollTop() < 60) {
      $("#header-nav").removeClass("isSticky");
    }
  });
})(jQuery);
(function ($) {
  /**
   * Carousel social footer
   */
  function carousel_init() {
    $(".owl-carousel").each(function () {
      var slider = $(this);
      var defaults = {
        // direction: $('body').hasClass('rtl') ? 'rtl' : 'ltr'
      };
      var config = $.extend({}, defaults, slider.data("plugin-options"));
      // Initialize Slider
      slider.owlCarousel(config).addClass("owl-carousel-init");
    });
  }

  /*** RUN ALL FUNCTION */
  /*doc ready*/
  $(document).ready(function () {
    carousel_init();
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $("#header-nav").addClass("isSticky");
    } else if ($(window).scrollTop() < 60) {
      $("#header-nav").removeClass("isSticky");
    }
  });
})(jQuery);

// Amazing Work
// jQuery(document).ready(function ($) {
//   $(".content").isotope({
//     itemSelector: "img",
//   });
//   $("ul li").click(function (event) {
//     // var type = $(this).attr('data-type');
//     var type = $(this).data("type");
//     // console.log(type);
//     var ten_loai = $(this).text();
//     $(".title").text(ten_loai);
//     type = "." + type;
//     $(".content").isotope({
//       filter: type,
//     });
//   });
// });

var $grid = $(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  getSortData: {
    name: function (element) {
      return $(element).text();
    },
  },
});
$(".filter button").on("click", function () {
  var value = $(this).attr("data-name");
  $grid.isotope({
    filter: value,
  });
  $(".filter button").removeClass("active");
  $(this).addClass("active");
});

// End Amazing Work

// peopleSay

$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
});

// End

var btnNavBar = document.querySelector("#nav-bar .menu-bar .btn-navbar i"),
  menuUl = document.querySelector("ul");
btnNavBar.onclick = function () {
  menuUl.classList.toggle("block");
};
// function myFunction() {
//   var x = document.getElementById("my-menu-collapse");
//   if (x.className === "menu-collapse") {
//     x.className += " responsive";
//   } else {
//     x.className = "menu-collapse";
//   }
// }
