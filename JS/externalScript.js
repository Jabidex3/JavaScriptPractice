document.body.style.backgroundColor = 'yellow'
/*
*/

//document.write(51 + 6);
function myFunction() {
  document.getElementById("prac").innerHTML = "New Text from external js file";
}


//JS is dynamic typing; var could hold any data type

function typeTest() {
  var a = 4;
  document.write(a + "<br>");
  a = "I am now a String";
  document.write(a+"<hr>");
}
typeTest()

function testEquality(){
  var e1 = 'Hello'=='HELLO';//false; case sensitivity
  var e2 = 77=='77'; //double equal converts operands to same type via type coercion ;true
  var e3 = 88==='88'//checks value and type; false
  var e4 = 'temp';
  var e5 = 'temp';
  return e2;
}
var x = testEquality();
document.getElementById("operatorDiff").innerHTML ="77=='77' is "+ x;