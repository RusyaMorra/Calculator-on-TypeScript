var ready = [];
var operations = [];
var display = document.getElementById('display');
var num1 = document.getElementById('num1');
num1.addEventListener("click", function display1() {
    var x = 1;
    /* var preready:Array<number> = [0];
     preready.push(x);
     
    
     
     var xx:string = preready.join("");
     console.log(xx);*/
    display.textContent = x;
    //var x:number= 1;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num2 = document.getElementById('num2');
num2.addEventListener("click", function display2() {
    display.textContent = "2";
    var x = 2;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num3 = document.getElementById('num3');
num3.addEventListener("click", function display3() {
    display.textContent = "3";
    var x = 3;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num4 = document.getElementById('num4');
num4.addEventListener("click", function display4() {
    display.textContent = "4";
    var x = 4;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num5 = document.getElementById('num5');
num5.addEventListener("click", function display5() {
    display.textContent = "5";
    var x = 5;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num6 = document.getElementById('num6');
num6.addEventListener("click", function display6() {
    display.textContent = "6";
    var x = 6;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num7 = document.getElementById('num7');
num7.addEventListener("click", function display7() {
    display.textContent = "7";
    var x = 7;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num8 = document.getElementById('num8');
num8.addEventListener("click", function display8() {
    display.textContent = "8";
    var x = 8;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num9 = document.getElementById('num9');
num9.addEventListener("click", function display9() {
    display.textContent = "9";
    var x = 9;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var num0 = document.getElementById('num0');
num0.addEventListener("click", function display0() {
    display.textContent = "0";
    var x = 0;
    littleshelf(x);
    function littleshelf(x) {
        ready.push(x);
        console.log(ready);
    }
});
var numdot = document.getElementById('numdot');
numdot.addEventListener("click", function displaydot() {
    display.textContent = ",";
    // var dot:number=6; 
    // ready.push(dot); 
});
var numdivide = document.getElementById('numdivide');
numdivide.addEventListener("click", function displaynumdivide() {
    display.textContent = "/";
    var plus = '/';
    operation(plus);
    function operation(y) {
        operations.push(y);
        console.log(operations);
    }
});
var numduble = document.getElementById('numduble');
numduble.addEventListener("click", function displaynumduble() {
    display.textContent = "*";
    var plus = '*';
    operation(plus);
    function operation(y) {
        operations.push(y);
        console.log(operations);
    }
});
var numminus = document.getElementById('numminus');
numminus.addEventListener("click", function displaynumminus() {
    display.textContent = "-";
    var plus = '-';
    operation(plus);
    function operation(y) {
        operations.push(y);
        console.log(operations);
    }
});
var numplus = document.getElementById('numplus');
numplus.addEventListener("click", function displaynumplus() {
    display.textContent = "+";
    var plus = '+';
    operation(plus);
    function operation(y) {
        operations.push(y);
        console.log(operations);
    }
});
var numequall = document.getElementById('numequall');
numequall.addEventListener("click", function displaynumequall() {
    for (var i = 0; i < operations.length; i++) {
        if (operations[i] == ('+')) {
            var a = ready[0];
            var b = ready[1];
            console.log(a);
            console.log(b);
            var resultplus = a + b;
            display.textContent = resultplus;
            console.log('Результат готов');
            console.log(resultplus);
            ready = [];
            operations = [];
        }
        else if (operations[i] == ('-')) {
            var a = ready[0];
            var b = ready[1];
            console.log(a);
            console.log(b);
            var resultplus = a - b;
            display.textContent = resultplus;
            console.log('Результат готов');
            console.log(resultplus);
            ready = [];
            operations = [];
        }
        else if (operations[i] == ('*')) {
            var a = ready[0];
            var b = ready[1];
            console.log(a);
            console.log(b);
            var resultplus = a * b;
            display.textContent = resultplus;
            console.log('Результат готов');
            console.log(resultplus);
            ready = [];
            operations = [];
        }
        else if (operations[i] == ('/')) {
            var a = ready[0];
            var b = ready[1];
            console.log(a);
            console.log(b);
            var resultplus = a / b;
            display.textContent = resultplus;
            console.log('Результат готов');
            console.log(resultplus);
            ready = [];
            operations = [];
        }
    }
});
/*function dotoperation() {
   var pattern:number = xxxxxx;
  
    

  }*/
