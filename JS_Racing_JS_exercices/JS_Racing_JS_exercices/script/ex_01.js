/*let element;
element = document.getElementById('changer');
if (element) {
    element.innerHTML = "Hello World";
}
*/

/*function changeText(){
    let element = document.getElementById('changer');
    element.innerHTML = "Hello World";
}*/

//document.getElementById("changer").textContent="Hello World";

//document.querySelector('changer').innerText = 'Hello World';
window.onload=()=>{
    document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "Hello World";    
}
//document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "Hello World";