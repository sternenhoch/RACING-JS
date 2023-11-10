window.onload=()=>{
    /*
    let element = document.getElementsByClassName("exercise");
    let array = ['50px', '55px', '60px'];
    let increase = 0;
    function increase (){
        element.style.fontSize ="40px";
    }
    increaseFontSize()
   
   */ 
  /* 
   let button = document.querySelector('button');
   let increase = document.querySelector('increase');
   let decrease = document.querySelector('decrease');
   let textSize
   button.addEventListener("click", function(){
    document.getElementsByClassName("exercise").style.fontsize = "40px";
  });      
   
   */

   let increase = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("button")[0];
   let decrease = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("button")[1];
   let body = document.body;
   //let font = document.getElementsByTagName("section").style.fontSize = "5%";
   
  
   increase.addEventListener("click", function(){
    
    body.style.fontSize = "large"

   });
   decrease.addEventListener("click", function(){
    body.style.fontSize = "small";

   });

   let changeBackgroundColor = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("select")[0];
   let update = document.body;

   changeBackgroundColor.addEventListener("change", function(){
    let selectedValue = changeBackgroundColor.value;
    update.style.backgroundColor = selectedValue;

   });
    

}
       