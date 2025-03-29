document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mktt-form");
    const status = document.getElementById("form-status");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      
      try {
        const response = await fetch("https://formspree.io/f/xwplnblj", {
          method: "POST",
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          status.innerText = "¡Tu mensaje fue enviado correctamente!";
          status.style.color = "#8B0000";
          form.reset();
        } else {
          status.innerText = "Ocurrió un error. Intentá nuevamente.";
          status.style.color = "red";
        }
      } catch (error) {
        status.innerText = "Error de red o conexión.";
        status.style.color = "red";
      }
    });
  });
  
