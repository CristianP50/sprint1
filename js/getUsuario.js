let url = 'http://localhost:3000/usuarios';

const form = document.getElementById('formInicio');

const getUsuarios = async() => {

    try{
    const peticion = await fetch(url);
    const datos = await peticion.json();
    console.log(datos);
    }catch (error){
        alert(error);
    }
}

    form.addEventListener('submit', (e) => {
        e.addEventListener();
        let data = await getUsuarios();
        data.forEach(ValueUser => {
            const {nombreUsuario,correo} = ValueUser;
            console.log(ValueUser);
        });

  


















function valueRegistro(ValueUser) {
    let nameUsuario = document.getElementById('registradoNameUser').value;
    let correoUsuario = document.getElementById('registradoEmail').value;
     if (nameUsuario == nombreUsuario && correoUsuario == correo){
        alert('usuario registrado');
        }else{
            alert('debes registrarte');
        }
    }

    valueRegistro()
});
showUser();
getUsuarios();