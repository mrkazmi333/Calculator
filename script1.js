var form=document.getElementById ("jsfor");
var one = document.getElementById ("jsone");
var two =  document.getElementById ("jstwo");
var three =  document.getElementById ("jsthree");
var four =  document.getElementById ("jsfour");
var five =  document.getElementById ("jsfive");
var six =  document.getElementById ("jssix");
var seven= document.getElementById ("jsseven");
var eight =document.getElementById("jseight");
var nine =  document.getElementById ("jsnine");
var zero =  document.getElementById ("jszero");
var plus = document.getElementById ("jsplus");
var sum = document.getElementById("jsminus");
var ap =  document.getElementById ("jsap");
var doub =  document.getElementById ("jsdouble");
var dd =  document.getElementById ("jsdivide");
var calc = document.getElementById("jsgot");
/* var bck = document.getElementById("back");
var clr = document.getElementById("clear"); */

calc.onclick = functionCal;

one.onclick = functionOne;

two.onclick = functionTwo;

three.onclick = functionThree;

four.onclick = functionFour;

five.onclick = functionFive;

six.onclick = functionSix;

seven.onclick = functionSeven;

eight.onclick = functionEight;

nine.onclick = functionNine;

zero.onclick=functionZero;

plus.onclick = functionPlus;

doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;

/*clr.onclick=myClear;

bck.onclick = myBack; */

function functionPlus(){
form.value += "+";
plus.onclick = ""


}

 function functionDouble(){
 form.value += "*"
 doub.onclick = ""

 }
 function functionSum(){
 form.value += "-"
  sum.onclick = ""
 
 } 
 
 function functionDiv(){
	 form.value += "/"
	dd.onclick = ""
	 
 }
 
 function functionAp(){
	 form.value += "."
	 ap.onclick = ""
	 
 }

 function myBack(){
     
    var exp = form.value
    form.value = exp.substring(0,exp.length-1)
    
     
 }

 function myClear(){
     
     form.value=""
     
     
 }

function functionOne(){
form.value +="1";
plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;

}

function functionTwo(){
form.value +="2";
plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}


function functionThree(){
form.value +="3";
plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}
function functionFour(){
form.value +="4";
plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}
function functionFive(){
form.value +="5";

plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}
function functionSix(){
form.value +="6";

plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}
function functionSeven(){
form.value +="7";

plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}

function functionEight(){
form.value +="8";

plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;

}
function functionNine(){
form.value +="9";

plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}

function functionZero(){
form.value +="0";

plus.onclick = functionPlus;
doub.onclick =functionDouble;

sum.onclick= functionSum;

dd.onclick = functionDiv;

ap.onclick =functionAp;
}







 function functionCal (){
 var bec = eval(form.value);
 form.value = bec;

 plus.onclick = functionPlus;
 doub.onclick =functionDouble;
 
 sum.onclick= functionSum;
 
 dd.onclick = functionDiv;
 
 ap.onclick =functionAp;

 }

 /*var calc = document.getElementById("jsgot");
 calc.addEventListener("keyup", function(event) {
 if(event.keyCode === 13){
     event.preventDefault();
     document.getElementById("jsfor").click();
     
 }
}); */