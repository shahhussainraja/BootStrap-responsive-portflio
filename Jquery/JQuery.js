$(function () {
  $("#button1").click(addColor1);
  $("#button2").click(addColor2);
});

function addColor1() {
  $("#body").removeClass("buttonColor2");
  $("#card1").removeClass("cardColor");
  $("#card2").removeClass("cardColor");
  $("#card3").removeClass("cardColor");
  $("#card4").removeClass("cardColor");

  $("#body").addClass("buttonColor1");
  $("#card1").addClass("cardColor2");
  $("#card2").addClass("cardColor2");
  $("#card3").addClass("cardColor2");
  $("#card4").addClass("cardColor2");
  $("#card4").addClass("cardColor2");
  console.log("queryHits");
}
function addColor2() {
  $("#body").removeClass("buttonColor1");
  $("#card1").removeClass("cardColor2");
  $("#card2").removeClass("cardColor2");
  $("#card3").removeClass("cardColor2");
  $("#card4").removeClass("cardColor2");
  $("#card4").removeClass("cardColor2");

  $("#body").addClass("buttonColor2");
  $("#card1").addClass("cardColor");
  $("#card2").addClass("cardColor");
  $("#card3").addClass("cardColor");
  $("#card4").addClass("cardColor");

  console.log("queryHits");
}

// function hideContent() {
//   $("#container,p").hide();
//   console.log("hide Event fire");
// }

// function show() {
//   let value = $("#input").val();

//   if (value == "shah hussain raja" || value == "SHAH HUSSAIN RAJA"){
//     $("#output").html("<p>Well Come MR." +value+"</p>");
//   }else{
//     $("#output").html("<p>sorry your are no wellcome MR." +value+"</p>");
//   }
//   console.log("event fire");
// }
