$("#whobtn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#WHO").offset().top,
    },
    500
  );
});

$("#projectsbtn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    500
  );
});

$("#toenstraks").click(function () {
  console.log("hallo");
  //   $(".modal").style.display = "block";
  $("#modalToenstraks").modal();
});

$("#shirts").click(function () {
  console.log("hallo");
  //   $(".modal").style.display = "block";
  $("#modalShirts").modal();
});

$("#sunnycode").click(function () {
  console.log("hallo");
  //   $(".modal").style.display = "block";
  $("#modalCode").modal();
});

$("#genart").click(function () {
  console.log("hallo");
  //   $(".modal").style.display = "block";
  $("#modalGenart").modal();
});
