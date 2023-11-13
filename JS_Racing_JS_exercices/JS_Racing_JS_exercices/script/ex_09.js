/*const canvas = document.getElementById('canvas');
const dropZone= document.getElementById('drop-zone');

canvas.addEventListener('dragstart', function(event) {
    console.log(event)
})

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault()
})
dropZone.addEventListener('drop', function(event){
    dropZone.prepend(canvas)
})
*/

document.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("coordinates").innerHTML = "Relative coordinates";
 });
 
 document.addEventListener("dragend", function(event){
     let x = event.clientX; 
     let y = event.clientY;  
     document.getElementById("coordinates").innerHTML = "New Coordinates => {x: " + x + ", " + "y: " + y + "}";
 });
 
 document.addEventListener("dragover", function(event){
     event.preventDefault();
 });
 
 document.addEventListener("drop", function(event) {
     event.preventDefault();
     /*if ( event.target.className == "drop-zone" ) {
         let data = event.dataTransfer.getData("Text");
         event.target.appendChild(document.getElementById(data));
     }*/
     
     /*let x = event.clientX; 
     let y = event.clientY;*/
 });