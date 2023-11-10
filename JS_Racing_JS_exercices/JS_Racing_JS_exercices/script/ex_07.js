window.onload=()=>{
    
   
    let canvas = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("canvas")[0];
    let ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#e67e22";
    ctx.stroke();
    ctx.fillStyle= "#FFFFFF";
    ctx.fill();

    //let audio = new Audio("C:\Users\Administrateur\Downloads\JS_Racing_JS_exercices\JS_Racing_JS_exercices\triangle.ogg");
    let play = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].getElementsByTagName("canvas")[0];
    let audio = new Audio("./triangle.ogg");
    function playMusic() {
        //let audio = new Audio("./triangle.ogg");
        audio.play()
    }
    play.addEventListener("click", playMusic);

    let pause = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[1].getElementsByTagName("button")[0];
    function pauseMusic() {
       // let audio = new Audio("./triangle.ogg");
        audio.pause() 
    }
    pause.addEventListener("click", pauseMusic);

    let stop = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[1].getElementsByTagName("button")[1];
    function stopMusic() {
        audio.stop() 
    }
    stop.addEventListener("click", stopMusic);
    
    let mute = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[1].getElementsByTagName("button")[2];
    function muteMusic() {
        //let audio = new Audio("./triangle.ogg");
        audio.mute() 
    }
    mute.addEventListener("click", muteMusic);     
   }