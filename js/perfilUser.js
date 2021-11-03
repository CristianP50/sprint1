let form = document.getElementById('form');
let btnBuscar = document.getElementById('btnBuscar');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');
let url = 'http://localhost:3000/usuarios/';

btnBuscar.addEventListener('click', async (e) => {  
    let email = document.getElementById('email').value;
    document.getElementById('email').readOnly = true;
    let resp = await fetch('http://localhost:3000/usuarios/');
    let data = await resp.json();
    let modificar = data.find(user => user.correo === email)
    const {nombreUsuario, nombre, correo, id} = modificar;
    console.log(nombreUsuario, nombre, correo, id);
    document.getElementById('name').value = nombre;
    document.getElementById('nameUser').value = nombreUsuario;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;
});

btnEditar.addEventListener('click', async() => {
    let id = document.getElementById('id').value;
    let modNombre = document.getElementById('name').value;
    let modNameUser = document.getElementById('nameUser').value;
    let modEmail = document.getElementById('email').value;
  
        await fetch(url+id, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: modNombre,
            nombreUsuario: modNameUser,
            correo: modEmail
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
})

btnEliminar.addEventListener('click', async() => {

    let id = document.getElementById('id').value;
    await fetch(url+id,{
        method: 'DELETE',
    })
})

