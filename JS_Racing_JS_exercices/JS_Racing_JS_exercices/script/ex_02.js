
/*
window.onload=()=>{
 //var elem = document.querySelector('footer div');
 let element = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
 //document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "Hello World";

let countClicks = 0;

element.onclick = function() { 
  countClicks++;
  element.textContent = countClicks
};       
}
*/

window.onload=()=>{
    //var elem = document.querySelector('footer div');
    let element = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    //document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "Hello World";
   
   let countClicks = 0;
   
   element.addEventListener("click", function(){
     countClicks+=1;
     document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = countClicks;
   });       
   }