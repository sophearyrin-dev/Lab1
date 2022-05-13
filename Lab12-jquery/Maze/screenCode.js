$(function () {
  $("#div0").css("background-color", "brown");
  // augmentWidth();

  $("#div0").click(() => {
    $("#div0").hide();
  });

  $("#div0").mouseover(() => {
    $("#div0").css("opacity", 0.2);
  });

  $("#div0").mouseout(() => {
    $("#div0").css("opacity", 1);
  });

  $("input[type=submit]").click(() => {
    let interval = convertToInt($("#circleWidth").val());
    let numberOfCircles = convertToInt($("#numberOfCircles").val());
    let growthAmount = convertToInt($("#growthAmount").val());
    let circleWidth = convertToInt($("#circleWidth").val());

    augmentInterval = interval;
    growthAmountRate = growthAmount;
    let i = 1;

    for (; i <= numberOfCircles; i++) {
      let newDiv = $("<div>", { id: "div" + i, name: "div" + i });
      $("#circleContainer").append(newDiv);
      $("#div" + i).css("background-color", colors[i]);
      $("#div" + i).css("width", circleWidth);
      $("#div" + i).css(
        i % 2 === 0 ? "margin-left" : "margin-right",
        i % 2 === 0 ? 350 + i : 350 + i
      );
      $("#div" + i).css(
        i % 2 === 0 ? "margin-top" : "margin-top",
        i % 2 === 0 ? -15 + i : -18 + i
      );

      $("#div" + i).mouseover(() => {
        $("#div" + i).css("opacity", 0.2);
      });

      $("#div" + i).mouseout(() => {
        $("#div" + i).css("opacity", 1);
      });

      

      $("#div0").hide();

      augmentWidth(i, growthAmount, interval);
    }
  });
});

const colors = [
  "blue",
  "green",
  "grey",
  "yellow",
  "Bisque",
  "BlueViolet",
  "CadetBlue",
  "Chartreuse",
  "Cyan",
];

function augmentWidth(i, growthAmountRate, augmentInterval) {
  function add(i) {
    $("#div0").width($("#div0").width() + growthAmountRate);
    $("#div" + i).width($("#div" + i).width() + growthAmountRate);
    $("#div" + i).click(() => {
        alert(this)
      $("#div" + i).hide();
    });
  }

  setInterval(() => add(i), augmentInterval);
}

convertToInt = (str) => {
  return parseInt(str);
};
