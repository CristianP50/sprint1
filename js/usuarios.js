let form = document.getElementById('form');
let url = 'http://localhost:3000/usuarios';

// POST-------------------------------------------------

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let nombreUsuario = document.getElementById('nameUser').value;
    let correo = document.getElementById('email').value;
   
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            nombre,
            nombreUsuario,
            correo 
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    window.location = "../index.html";
    alert('Gracias por registrarse');
    
    
});


