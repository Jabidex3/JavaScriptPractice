
//-Ending statements with semicolon is not required, but highly recommended for readability
/*
  JS Variables
        -declare using var,let,const
            -const variables cannot be reassigned
            -var variables are present usually in the global scope; can be accessed anywhere
                -at minimum it is function scope [not block scope]
            -Whenever you declare a variable in a function, the variable is visible only within the function!!! [function scope/local]
                -can't access it outside the function
            -A block scope is the area within if, switch conditions or for and while loops.
                -can use let/const
                    -not accessible outside block
*/

//Variable Testing
var test = "hello"; //global
document.getElementById("t1").innerHTML= test;
function change(){
    var test = "goodbye" //new var; local
    document.getElementById("t2").innerHTML= test
}

function change2(){
    test = "new text" //accessing global scope var and changing value
    document.getElementById("t3").innerHTML= test
}

//document.getElementById("t4").innerHTML= test; //since it is before change2 function call, test is still "hello"

change()
change2()
document.getElementById("t4").innerHTML= test; //test is now 'new text'


//operators
function expon(){
    document.getElementById("t5").innerHTML= 3**2
}

function stringNum(){
    var x = 5 + 5;//10
    var y = "5" + 5; //55
    var z = "Hello" + 5;//Hello5
    document.getElementById("t6").innerHTML = x + "&nbsp;&nbsp;&nbsp;&nbsp;" + y + "&nbsp;&nbsp;&nbsp;&nbsp;" + z;
    document.getElementById("t7").innerHTML = typeof(x) + "&nbsp;&nbsp;&nbsp;&nbsp;" + typeof(y) + "&nbsp;&nbsp;&nbsp;&nbsp;" + typeof(z);
}

function stringMath(){
    var t="10+10";
    var u = "34";
    var v = 16;
    var w = "13"
    document.getElementById("t8").innerHTML =t;//"10+10"
    document.getElementById("t9").innerHTML =u+v;//"3416"
    document.getElementById("t10").innerHTML =u+w;//"3413"
    document.getElementById("t11").innerHTML =t+v;//"10+1016"
}

expon();
stringNum();
stringMath();

//datatypes
    //JavaScript evaluates expressions from left to right. Different sequences can produce different results
        //var x = 16 + 4 + "Volvo"; //20Volvo
        //var x = "Volvo" + 16 + 4; //Volvo164
    //JavaScript has dynamic types. This means that the same variable can be used to hold different data types

    /*
        -JS Strings are written with quotes. You can use single or double quotes
        -JS  Numbers can be written with, or without decimals
        -Js Booleans can only have two values: true or false
        -JavaScript arrays are written with square brackets.
    */

    var arrOfDays2 = ["Monday","Tuesday","Wednesday"] //array
    document.getElementById("t13").innerHTML =   arrOfDays2[0] +"/"+ typeof arrOfDays2[0] +"/"+ typeof arrOfDays2

    //objects
        //-written with curly braces {}
        //-Object properties are written as name:value pairs, separated by commas
   var person = {
    firstName : "Jack",
    lastName  : "Douglas",
    age     : 30,
    eyeColor  : "blue"
  };
  
  document.getElementById("t14").innerHTML =  person.firstName + " is " + person.age + " years old.";

  //Any variable can be emptied, by setting the value to undefined or null
  //diff between null and undefined
  /*
  typeof undefined           // undefined
    typeof null                // object

    null === undefined         // false
    null == undefined          // true

    tldr: undefined is better
  */

/*
JS Functions

syntax:
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function Invocation~~~
The code inside the function will execute when "something" invokes (calls) the function:
    -When an event occurs (when a user clicks a button)
    -When it is invoked (called) from JavaScript code
    -Automatically (self invoked)
*/

function greeting(name){
    if(name.length==0){
        return "Please enter your name!"
    }
    return "Hello "+ name;
}

function takeName(name){
    document.getElementById("t15").innerHTML = greeting(name);
}