window.onload = function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(evento) {
        
        if (!form.elements['nombre'].value || !form.elements['apellido'].value || !form.elements['email'].value) {
            alert("Error, formulario vacío");
            evento.preventDefault();
        }

        const nombre = form.elements['nombre'].value;
        const apellido = form.elements['apellido'].value;
        const email = form.elements['email'].value;
        console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Email: ${email}`);
    });
};