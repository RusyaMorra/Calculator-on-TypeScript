

var ready:Array<number> = [];
var operations:Array<string> = [];





const display:any = document.getElementById('display');





const num1:any = document.getElementById('num1');
num1.addEventListener("click", function display1(){
    var x:number= 1;
    
   
    
    /* var preready:Array<number> = [0];
     preready.push(x);
     
    
     
     var xx:string = preready.join("");
     console.log(xx);*/
        display.textContent=x;  
         
   
    
    
    //var x:number= 1;
    littleshelf(x);


   




    function littleshelf(x:number ){
    
    
    ready.push(x); 
     
    
    console.log(ready);
    }
      
    
});







const num2:any = document.getElementById('num2');
num2.addEventListener("click", function display2(){
   
    display.textContent="2";  
    var x:number= 2;
    littleshelf(x);



    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
  
});








const num3:any = document.getElementById('num3');
num3.addEventListener("click", function display3(){
  
    display.textContent="3";  
    var x:number= 3;
    littleshelf(x);



    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});






const num4:any = document.getElementById('num4');
num4.addEventListener("click", function display4(){
  
    display.textContent="4";  
    var x:number= 4;
    littleshelf(x);



    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});






const num5:any = document.getElementById('num5');
num5.addEventListener("click", function display5(){
  
    display.textContent="5";  
    var x:number= 5;
    littleshelf(x);


    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});




const num6:any = document.getElementById('num6');
num6.addEventListener("click", function display6(){
  
    display.textContent="6";  
    var x:number= 6;
    littleshelf(x);



    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});




const num7:any = document.getElementById('num7');
num7.addEventListener("click", function display7(){
  
    display.textContent="7";  
    var x:number= 7;
    littleshelf(x);



    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});



const num8:any = document.getElementById('num8');
num8.addEventListener("click", function display8(){
  
    display.textContent="8";  
    var x:number= 8;
    littleshelf(x);


    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});





const num9:any = document.getElementById('num9');
num9.addEventListener("click", function display9(){
  
    display.textContent="9";
    var x:number= 9;
    littleshelf(x);  



    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});






const num0:any = document.getElementById('num0');
num0.addEventListener("click", function display0(){
  
    display.textContent="0";  
    var x:number= 0;
    littleshelf(x);


    function littleshelf(x:number ){
    
    
        ready.push(x); 
         
        
        console.log(ready);
        }
});










const numdot:any = document.getElementById('numdot');
numdot.addEventListener("click", function displaydot(){
  
    display.textContent=","; 
   // var dot:number=6; 
   // ready.push(dot); 
});










const numdivide:any = document.getElementById('numdivide');
numdivide.addEventListener("click", function displaynumdivide(){
  
    display.textContent="/";  
    var plus:string= '/';
    operation(plus);


    function operation(y:string ){
    
    
        operations.push(y); 
         
        
        console.log(operations);
        }

});





const numduble:any = document.getElementById('numduble');
numduble.addEventListener("click", function displaynumduble(){
  
    display.textContent="*";  
    var plus:string= '*';
    operation(plus);


    function operation(y:string ){
    
    
        operations.push(y); 
         
        
        console.log(operations);
        }
   
});






const numminus:any = document.getElementById('numminus');
numminus.addEventListener("click", function displaynumminus(){
  
    display.textContent="-";  
    var plus:string= '-';
    operation(plus);


    function operation(y:string ){
    
    
        operations.push(y); 
         
        
        console.log(operations);
        }


});








const numplus:any = document.getElementById('numplus');
numplus.addEventListener("click", function displaynumplus(){
  
    display.textContent="+";  
    var plus:string= '+';
    operation(plus);


    function operation(y:string ){
    
    
        operations.push(y); 
         
        
        console.log(operations);
        }


  
});








const numequall:any = document.getElementById('numequall');
numequall.addEventListener("click", function displaynumequall(){
   
  



   
    for (let i=0; i< operations.length; i++){
        if (operations[i]==('+')){

          let a: any = ready[0]
          let b: any = ready[1]
          
          console.log(a)
          console.log(b)

        var resultplus: number = a+b;
         
        display.textContent=resultplus; 
        console.log('Результат готов')
        console.log(resultplus)
         ready = [];
         operations= [];

    }else if (operations[i]==('-')){
         
        let a: any = ready[0]
        let b: any = ready[1]
        console.log(a)
        console.log(b)

      var resultplus: number = a-b;
       
      display.textContent=resultplus; 
      console.log('Результат готов')
      console.log(resultplus)
      ready = [];
      operations= [];
    }else if (operations[i]==('*')){
         
        let a: any = ready[0]
        let b: any = ready[1]
        console.log(a)
        console.log(b)

      var resultplus: number = a*b;
       
      display.textContent=resultplus; 
      console.log('Результат готов')
      console.log(resultplus)
      ready = [];
      operations= [];
    }else if (operations[i]==('/')){
         
        let a: any = ready[0]
        let b: any = ready[1]
        console.log(a)
        console.log(b)

      var resultplus: number = a/b;
       
      display.textContent=resultplus; 
      console.log('Результат готов')
      console.log(resultplus)
      ready = [];
      operations= [];
    }
    }
   
   
});








/*function dotoperation() {
   var pattern:number = xxxxxx;
  
    

  }*/
 





































