
$(window).scroll(function() {

  if ($("#menu").offset().top > 1450) {
    $("#link-1").addClass("d-md-block");
    $("#link-2").addClass("d-md-block");
    $("#link-3").addClass("d-md-block");
  }else {
    $("#link-1").removeClass("d-md-block");
    $("#link-2").removeClass("d-md-block");
    $("#link-3").removeClass("d-md-block");
  }

});