function openC(){
   
    window.open("file:///D:/sample work/Calculator/index.html","_blank","width=25;height=12.5");
}


let inp = document.querySelector(".text");
function drsd(){
    inp.value += "%";
}
function ce(){
    inp.value = "";
}
function c(){
    inp.value = "";
}
function tksim(){
    inp.value += "/";
}
function num7(){
    inp.value += "7";
}
function num8(){
    inp.value += "8";
}
function num9(){
    inp.value += "9";
}
function X(){
    inp.value += "*";
}
function num4(){
    inp.value += "4";
}
function num5(){
    inp.value += "5";
}
function num6(){
    inp.value += "6";
}
function menha(){
    inp.value += "-";
}
function num1(){
    inp.value += "1";
}
function num2(){
    inp.value += "2";
}
function num3(){
    inp.value += "3";
}
function plas(){
    inp.value += "+";
}
function num0(){
    inp.value += "0";
}
function dat(){
    inp.value += ".";
}
function musafvi(){
   let a = eval(inp.value);
   inp.value = a;
}

