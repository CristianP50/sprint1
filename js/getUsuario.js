let url = 'http://localhost:3000/usuarios';

const form = document.getElementById('formInicio');

const getUsuarios = async() => {
    let nameUsuario = document.getElementById('registradoNameUser').value;
    let correoUsuario = document.getElementById('registradoEmail').value; 
    try{
    const peticion = await fetch(url);
    const datos = await peticion.json();

    datos.forEach(resultData => {
    const {nombreUsuario, correo} = resultData;

        if(nameUsuario === nombreUsuario && correoUsuario === correo){
            
            window.location = "/pelisPelis.html";
        }
          
    });

    }catch (error){
        alert(error);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getUsuarios();
});




