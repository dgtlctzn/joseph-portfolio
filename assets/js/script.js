var containerEl = $(".link");

containerEl.on("mouseenter", function() {
    $(this).children().next().removeClass("hide");
    $(this).children().next().addClass("show");

    $(this).children().first().addClass("opacity");
})

containerEl.on("mouseleave", function() {
    $(this).children().next().removeClass("show");
    $(this).children().next().addClass("hide");

    $(this).children().first().removeClass("opacity");
})