window.onload=()=>{
    let lastKeyPressed = "";
   
document.addEventListener('keydown', function(event) {
   lastKeyPressed += event.key;
   if (lastKeyPressed.length > 42) {
       lastKeyPressed = lastKeyPressed.substring(lastKeyPressed. length -42);
   }
   document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = lastKeyPressed;
 });
}