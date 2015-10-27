var num1;
var num2;
var operator;
var answer=0;

$( document ).ready(function() {

console.log("Jquery Loaded boiiiii")


// $('.box').click(function(event){
//   alert('you clicked a box');

$(".operator").on('click', function(){
    console.log(this, arguments);
    // console.log("operator works kinda");
    console.log($('#window'));
    num1 = (this.value);
    // console.log(num1);
    $("#window").val("")
    operator = (".operator".value)
    console.log(operator);
});

$('.numbers').on('click', function(evt) {
  console.log(this);
  console.log(this.value);
  $("#window").val(this.value);
});

// function dothemath(pass){
// pass.addEventListener("click", function() {
//   num1 = $('#window').value);
//   $('#window').value = "";
//   operator = pass.value;
// });
//
// }


//   event.addEventListener("click", function() {
//     document.getElementById('window').value += event.value;
//   });
// });
//
// clickHandler(document.getElementById("num7"));
// clickHandler(document.getElementById("num8"));
// clickHandler(document.getElementById("num9"));
// clickHandler(document.getElementById("num4"));
// clickHandler(document.getElementById("num5"));
// clickHandler(document.getElementById("num6"));
// clickHandler(document.getElementById("num3"));
// clickHandler(document.getElementById("num2"));
// clickHandler(document.getElementById("num1"));
// clickHandler(document.getElementById("num0"));
// clickHandler(document.getElementById("dot"));
// dothemath(document.getElementById("divide"));
// dothemath(document.getElementById("minus"));
// dothemath(document.getElementById("times"));
// dothemath(document.getElementById("plus"));

$('#equals').on('click', function(operate) {
  operator =
  num2=$('#window').value;
  console.log(this);
  console.log(this.value);
  if (operator === "/") {
    answer = num1/num2;
  }
  else if (operator === "x") {
    answer = num1*num2;
  }
  else if (operator === "-") {
    answer = num1-num2;
  }
  else if (operator === "+") {
    answer = num1+num2;
  }
  $('window').value=answer;

console.log(num1, num2)
})
  // $("#window").val(this.value);
});

// $("equals").addEventListener("click", function() {
//   num2 = Number(document.getElementById('window').value);
//   if (operator === "/") {
//     answer = num1/num2;
//   }
//   else if (operator === "x") {
//     answer = num1*num2;
//   }
//   else if (operator === "-") {
//     answer = num1-num2;
//   }
//   else if (operator === "+") {
//     answer = num1+num2;
//   }
//   document.getElementById('window').value=answer;
//
// console.log(num1, num2)
// })
//   document.getElementById("clear").addEventListener("click", function(){
//   document.getElementById('window').value = "";
//   });
// });
