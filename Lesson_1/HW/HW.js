$(document).ready(function() {
  $(".fadeButton").click(() => {
    $(".table").fadeToggle();
  });

  $(".copyButton").click(() => {
    $(".pasteArea").html($(".textBox").val());
    $(".textBox").remove();
  });
  $(".copyButton2").click(() => {
    $(".pasteArea2").html($(".textBox2").val());
    $(".textBox2").remove();
  });

  $(".fillButton").click(() => {
    let first = $(".firstNumber").val();
    let second = $(".secondNumber").val();
    while (first <= second) {
      $(".selectRoll").append(`<option>${first}</option>`);
      first++;
    }
  });
  $(".fillNumbers").click(() => {
    let orangeDiv = $(".orange");
    $.each(orangeDiv, i => {
      const val = i + 1;
      orangeDiv.slice(i).html(val);
    });
  });

  $(".orange").click(event => {
    let orangeDiv = $(".orange");
    const currentValue = $.inArray(event.target, orangeDiv) + 1;
    alert(currentValue);
  });
});
