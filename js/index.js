// Filter

var filter = $("[data-filter]");

filter.on("click", function(event) {
  event.preventDefault();
  var category = $(this).data('filter');

  if (category == 'all') {
    $("[data-category]").removeClass("hide");
  } else {
    $("[data-category]").each(function() {
      var workCategory = $(this).data('category');

      if (workCategory != category) {
        $(this).addClass("hide");
      } else {
        $(this).removeClass("hide");
      }
    });
  }
});

// Modals

var modalCall = $("[data-modal]");
var modalClose = $("[data-close]");

modalCall.on("click", function(event) {
  event.preventDefault();
  var $this = $(this);
  var modalID = $this.data('modal');
  $(modalID).addClass('active');
  $("body").addClass('no-scroll');
});

modalClose.on("click", function(event) {
  event.preventDefault();
  var $this = $(this);
  var modalParent = $this.parents('.modal');
  $(modalParent).removeClass('active');
  $("body").removeClass('no-scroll');
});

$(".modal").on("click", function(event) {
  $(this).removeClass('active');
  $("body").removeClass('no-scroll');
});

$(".modal__dialogue").on("click", function(event) {
  event.stopPropagation();
});

// Slider

$('[data-slider="slick"]').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

$(".prev-slick").on("click", function(event) {
  event.preventDefault();
  var currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
  currentSlider.slick("slickPrev");
});

$(".next-slick").on("click", function(event) {
  event.preventDefault();
  var currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');
  currentSlider.slick("slickNext");
});

// Mobile Nav

var navToggle = $("#navToggle");
var nav = $("#nav")

navToggle.on("click", function (event) {
  event.preventDefault();
  nav.toggleClass("show");
  $(".burger").toggleClass("pressed");
});

// Nav Scroll

$("a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    nav.removeClass("show");
    $(".burger").removeClass("pressed");
    $("html, body").animate({
      scrollTop: $(hash).offset().top - 110
    }, 800,);
  }
});
