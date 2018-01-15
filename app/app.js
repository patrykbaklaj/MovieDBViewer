$("#top").on("click", function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 2000);
    $('#intro input').val("");
});

$("#searchButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("section.results").offset().top
    }, 1000);
});
