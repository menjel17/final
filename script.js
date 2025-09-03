$(document).ready(function() {
  let thumbs = $(".thumb");
  let currentIndex = 0;

  function showImage(index) {
    let largeImg = thumbs.eq(index).data("large");
    let altText = thumbs.eq(index).data("alt");
    $("#mainImage")
      .attr("src", largeImg)
      .attr("alt", altText)
      .removeClass("clicked"); // reset border
    thumbs.removeClass("active");
    thumbs.eq(index).addClass("active");
    currentIndex = index;
  }

  function showLightbox(index) {
    let largeImg = thumbs.eq(index).data("large");
    let altText = thumbs.eq(index).data("alt");
    $("#lightboxImg").attr("src", largeImg).attr("alt", altText);
    $("#lightbox").fadeIn();
  }

  // Thumbnail click
  thumbs.on("click", function() {
    let idx = thumbs.index(this);
    showImage(idx);
  });

  // Next / Prev in gallery
  $("#nextBtn").on("click", function() {
    let newIndex = (currentIndex + 1) % thumbs.length;
    showImage(newIndex);
  });
  $("#prevBtn").on("click", function() {
    let newIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    showImage(newIndex);
  });


  // Keyboard support
  $(document).on("keydown", function(e) {
    if ($("#lightbox").is(":visible")) {
      if (e.key === "ArrowRight") {
        $("#lightboxNext").click();
      } else if (e.key === "ArrowLeft") {
        $("#lightboxPrev").click();
      } else if (e.key === "Escape") {
        $("#lightbox").fadeOut();
      }
    }
  });
});
