$("#checkbox").change(function() {
  setInterval(function() {
    moveRight();
  }, 3000);
});

let slideCount = $("#slider ul li").length;
const slideWidth = $("#slider ul li").width();
const slideHeight = $("#slider ul li").height();
const sliderUlWidth = slideCount * slideWidth;

$("#slider").css({ width: slideWidth, height: slideHeight });

$("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

$("#slider ul li:last-child").prependTo("#slider ul");

function moveLeft() {
  $("#slider ul").animate(
    {
      left: +slideWidth
    },
    200,
    function() {
      $("#slider ul li:last-child").prependTo("#slider ul");
      $("#slider ul").css("left", "");
    }
  );
}

function moveRight() {
  $("#slider ul").animate(
    {
      left: -slideWidth
    },
    200,
    function() {
      $("#slider ul li:first-child").appendTo("#slider ul");
      $("#slider ul").css("left", "");
    }
  );
}

$("a.control_prev").click(function() {
  moveLeft();
});

$("a.control_next").click(function() {
  moveRight();
});

function hideCarosele() {
  $("#slider").hide();
}

function showCarosele() {
  $("#slider").show();
}

function clearslider() {
  $("#slider ul").html("");
}
function createSlider(data) {
  if ($("#slider ul").children().length === 0) {
    const slide = $("<li></li>").html("");
    $("#slider ul").append(slide);
  }

  const flag = $("<li></li>").append($("<img></img>").attr("src", data));
  $("#slider ul").append(flag);
}
