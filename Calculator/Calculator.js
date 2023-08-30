let string=" ";
let buttons=document.querySelectorAll('.grid-items');
let screen=document.querySelector('.screen');
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
    try{
    if(e.target.innerHTML=="="){
        string=eval(string);
        screen.innerText=string;
    }
    else if(e.target.innerHTML == 'Clear'){
        string=" ";
        screen.innerText=string;
    }
    else{
    console.log(e.target);
    string=string+e.target.innerHTML;
    screen.innerText=string;
    }
}
catch(e){
    screen.innerText="ERROR";
    string="";
}

   })
})