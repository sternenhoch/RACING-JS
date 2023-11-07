window.onload=()=>{
    let element = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
       
    //let result = confirm("Your name is") + userInput;
   
        element.addEventListener("click", function(){
            let userInput = prompt("What is your name? = ")
            while(userInput ==="" || userInput ==null){
                userInput = prompt("What is your name? = ")
                console.log("'"+userInput+"'")
            }
            if (userInput !== null) {
                confirm ("Are you sure your name is " + userInput + " ?")
                alert("Your name is " + userInput + " !")
            }
            document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "Hello " + userInput + " !";
            
    });       
   }
   

  /* window.onload=()=>{
    let element = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
       
        //let result = confirm("Your name is") + userInput;
   
        element.addEventListener("click", function(){
            
            while(true){
                const userInput = prompt("What is your name? = ")
                if (userInput != null) {
                    confirm ("Are you sure your name is " + userInput + " ?");               
                 }
            
            document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = "Hello " + userInput + " !";
            
    });       
   }
   */