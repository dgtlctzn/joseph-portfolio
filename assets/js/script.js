var containerEl = $(".link");

containerEl.on("mouseenter", function() {
    $(this).children().first().removeClass("hide");
    $(this).children().first().addClass("show");

    $(this).children().next().addClass("opacity");
})

containerEl.on("mouseleave", function() {
    $(this).children().first().removeClass("show");
    $(this).children().first().addClass("hide");

    $(this).children().next().removeClass("opacity");
})