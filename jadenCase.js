function jadenCase() {
  var text = document.getElementById('original').value;

  var newText = text.split(" ");
  
  firstLetters = newText.map( val => {
     return val[0].toUpperCase() + val.slice(1);
   }
   );
   
  newText = firstLetters.join(" ");
   
  document.getElementById("editedText").innerHTML = newText;
  document.getElementById("editedText").textContent = newText;

}


