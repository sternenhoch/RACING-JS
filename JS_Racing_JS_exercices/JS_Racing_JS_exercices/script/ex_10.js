window.onload=()=>{
    /*  const codesPostaux = require('codes-postaux');
  
  codesPostaux.find(75001);
  codesPostaux.find('75001');*/
  
  
  /*const outputElement = document.getElementById('output');document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];   
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Display data in an HTML element
      outputElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error('Error:', error);
    });*/
  
    /*fetch(apiUrl, { method: 'GET'})
    .then(function(response){
      return response.json()
    })
    .then(function (json) {
  
    })*/
  
   /* fetch(apiUrl, { method: 'GET' })
    .then(response => response.json())
    .then(response => alert(json.stringify(response)))
    .catch(error => alert("erreur : " + error));
  }
  */
  
  /*async function callApi(){
      let apiUrl = 'https://apicarto.ign.fr/api/doc/codes-postaux.yml';   
      let fetcher = await fetch(apiUrl);
      let json = await fetcher.json();
      document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = json.nomCommune + ", " + json.libelleAcheminement;    
  }
  }*/
  
  //Element à fetch
  //Url pour fetch
  //zone d'affichage des infos
  
  //Evenement qui sera écouté pour déclencher la requete: click sur le bouton
  //let ok = document.getElementsByTagName("section")[0].getElementsByTagName("button")[0];
  
  let userInput = document.getElementsByTagName("input")[0];
  document.getElementsByTagName("section")[0].getElementsByTagName("button")[0].addEventListener("click", function(){
      let apiUrl = 'https://apicarto.ign.fr/api/codes-postaux/communes/' + userInput.value + "";
      console.log(apiUrl)
      let infos = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          console.log(data)
          infos.innerHTML = "";
          document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].innerHTML = data[0].nomCommune + ", " + data[0].libelleAcheminement;
          
      })
  })
  }
  