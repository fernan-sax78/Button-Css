(function(){
  "use strict";


let btn = document.querySelector(".btn");



    
    //let myAttribute = btn.setAttribute("data-cont", "0" );


let attribute = btn.getAttribute("data-cont");



      

function incrementa() {
  
  
  for (let attr of btn.attributes) { 
   
   

    let num = parseInt(attr.value);




  if(num <= 10){
    
    attr.value = ++num;

    btn.innerText = "COUNTING";
     
  }
  
if(num >= 10){
  
    attr.value = 10;
    btn.innerText = "RESET";

}

  
  
if(num > 10){

    attr.value = 0;
    btn.innerText = "COUNTING";
    
     }
    


  
   }

}


// function.......... click.......

btn.addEventListener('click', incrementa);


//end.............................



    


    
    









}());