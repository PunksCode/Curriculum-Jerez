document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.getElementById('formulario-contacto');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      console.log(name, email, subject);
    });
    
    let printButton = document.getElementById("print-btn");
    printButton.addEventListener("click", function() {
      window.print();
    
      let element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.body.innerHTML));
      element.setAttribute('download', 'filename.pdf');
      element.style.display = 'none';
      document.body.appendChild(element);
  
      element.click();
      document.body.removeChild(element);
    });
  });