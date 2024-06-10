document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if (nombre && email && mensaje) {
            alert('Mensaje enviado con éxito');
            form.reset();
        } else {
            alert('Por favor, completa todos los campos');
        }
    });
});
