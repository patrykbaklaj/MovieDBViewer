$("#top").on("click", function() {
  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 2000);
  $('#intro input').val("");
});

$('.search-form').on("submit", scrollBody);

function scrollBody() {
  console.log("scroll");
  $('html, body').delay(500).animate({
    scrollTop: $("#intro").offset().top + window.innerHeight + 2
  }, 1000);
};
