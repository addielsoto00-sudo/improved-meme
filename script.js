// Al hacer clic en el link
document.getElementById("link").addEventListener("click", function(e) {
  e.preventDefault();

  // Cambia pantalla a azul gradiente
  document.body.style.background = "linear-gradient(to bottom, blue, black)";
  document.body.style.color = "white";
  document.body.innerHTML = "<h1 class='glitch'>zzzzzzzz...</h1>";

  // Reproduce sonido glitch
  let glitchSound = document.getElementById("glitchSound");
  glitchSound.play().catch(()=>{});

  // Mensaje 1 (a los 3s)
  setTimeout(() => {
    document.body.innerHTML = "<h1>¿Qué quieres hacer aquí?</h1>";

    // Abre nueva ventana
    let win2 = window.open("", "_blank", "width=500,height=300");
    win2.document.write("<h1>¿Diste click solo para ver esto?</h1>");

    // Mensaje 2 en esa ventana (después de 4s)
    setTimeout(() => {
      win2.document.body.innerHTML = "<h1>Es curioso que hayas dado click aquí...<br>Has perdido tu tiempo.</h1>";

      // Abre otra ventana rara
      let win3 = window.open("", "_blank");
      win3.document.write("<h1>Pon esta ventana en pantalla completa...</h1>");

      // Simula un efecto más creepy (a los 5s cambia fondo de la ventana)
      setTimeout(() => {
        win3.document.body.style.background = "linear-gradient(to bottom, blue, black)";
        win3.document.body.style.color = "white";
        win3.document.body.innerHTML = "<h1 style='font-family:monospace;'>esto no te sirve de nada a ti,<br>solo viniste porque fue tu decisión</h1>";
        glitchSound.play().catch(()=>{});
      }, 5000);

      // Mensaje final (a los 10s)
      setTimeout(() => {
        win3.document.body.style.background = "black";
        win3.document.body.innerHTML = "<h1 style='color:white;font-size:3em;'>LARGOOOOOO</h1>";
      }, 10000);

    }, 4000);

  }, 3000);
});
