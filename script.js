document.addEventListener("DOMContentLoaded", function () {

  const text = "Bienvenue sur MBT Moto";
  let index = 0;
  const typewriter = document.createElement("h2");
  document.querySelector(".motos-en-vente").prepend(typewriter);
 
  function typeEffect() {
    if (index < text.length) {
      typewriter.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
 

});
 