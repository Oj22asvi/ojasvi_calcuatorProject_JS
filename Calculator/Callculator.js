console.log("hllo");
// let ans=document.querySelectorAll('.grid-items');
let one= document.querySelector('.item1');
let two= document.querySelector('.item2');
let three= document.querySelector('.item3');
let four= document.querySelector('.item4');
let five= document.querySelector('.item5');
let six= document.querySelector('.item6');
let seven= document.querySelector('.item7');
let eight= document.querySelector('.item8');
let nine= document.querySelector('.item9');
let zero= document.querySelector('.item0');
let dzero= document.querySelector('.item00');
let dot= document.querySelector('.itemdot');
let clr= document.querySelector('.grid-item1');
let plus= document.querySelector('.grid-item2');
let equal= document.querySelector('.itemequal');
let screen1=document.querySelector('.screen');
let display="";
let display2="";
let ans2=0;
one.addEventListener('click',func1);
function func1(){
    display=display+"1";
    screen1.innerText=display;
}

two.addEventListener('click',func2);
function func2(){
    display=display+"2";
    screen1.innerText=display;
    
}

three.addEventListener('click',func3);
function func3(){
    display=display+"3";
    screen1.innerText=display;
}

four.addEventListener('click',func4);
function func4(){
    display=display+"4";
    screen1.innerText=display;
}

five.addEventListener('click',func5);
function func5(){
    display=display+"5";
    screen1.innerText=display;
}

six.addEventListener('click',func6);
function func6(){
    display=display+"6";
    screen1.innerText=display;
}

seven.addEventListener('click',func7);
function func7(){
    display=display+"7";
    screen1.innerText=display;
}

eight.addEventListener('click',func8);
function func8(){
    display=display+"8";
    screen1.innerText=display;
}

nine.addEventListener('click',func9);
function func9(){
    display=display+"9";
    screen1.innerText=display;
}

zero.addEventListener('click',func0);
function func0(){
    display=display+"0";
    screen1.innerText=display;
}

dzero.addEventListener('click',func00);
function func00(){
    display=display+"00";
    screen1.innerText=display;
}

dot.addEventListener('click',funcdot);
function funcdot(){
    display=display+".";
    screen1.innerText=display;
}

clr.addEventListener('click',funcclear);
function funcclear(){
    display="";
    screen1.innerText=display;
}

plus.addEventListener('click',funcplus);
function funcplus(){
    display2=display;
     ans2=ans2+display2;  //25
    display=display + " + ";  
    screen1.innerText=display; 
     display2="";
}
equal.addEventListener('click',funcequal);
function funcequal(){
    display=ans2;
    screen1.innerText=display;
}
// plus.addEventListener('click',funcplus);
// function funcplus(){
//     let ans2=ans2+display;
    
//     display=display + " + ";
//     screen1.innerText=display;
//     // display="";
// }







// one.addEventListener("click",func1);
// function func1(){
//     console.log("hiii");
//     console.log(screen1.innerText);
//     screen1.innerText=1;
//     console.log(screen1.innerText);
    
// }

// one.addEventListener("click",func1);
// function func1(){
//     console.log("hiii");
//     console.log(screen1.innerText);
//     screen1.innerText=1;
//     console.log(screen1.innerText);
    
// }
