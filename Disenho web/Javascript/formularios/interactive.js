alert('link');
(function(){

var formu = document.getElementById('formu'),
    nombre = formu.nombre,
    email = formu.email,
    sexo = formu.sexo,
    terms = formu.terms;
    error = document.getElementById('error');
    function validarNombre(e) {
        if(nombre.value.length >= 18){
            e.preventDefault();
            error.style.display = 'block';
            error.innerHTML += error.innerHTML + '<li> El largo de el nombre es mayor al permitido< /li>';
        }
        else if(nombre.value == ''){
            e.preventDefault();
            error.style.display = 'block';
            error.innerHTML += error.innerHTML + '<li> Por favor ingrese su nombre en la casilla indicada </li>';
        }
        else{
            error.style.display = 'none';
        }
    }
    function validarEmail(e){
        if((esCorreoElectronico = correoElectronico => /\S+@\S+/.test(email))== false){
            alert('Maximo de caracteres permitidos');
            e.preventDefault();
            error.style.display = 'block';
            error.innerHTML += error.innerHTML + '<li> El e-mail no es valido </li>';
        }
        else if(email.value == ''){
            error.innerHTML += error.innerHTML + '<li> introduzca un email por favor </li>';
            e.preventDefault();
        }
        else{
            error.style.display = 'none';
        }
    }
    function validarSexo(e){
        if(sexo[0].checked == false && sexo[1].checked == false){
            error.innerHTML += error.innerHTML + '<li> Escoge un genero </li>';
            e.preventDefault();
        }
        else{
            error.style.display = 'none';
        }
    }
    function validarTermminos(e){
        if(terms.checked == false){
            error.innerHTML += error.innerHTML + '<li> No olvide aceptar los terminos y condiciones </li>';
            e.preventDefault();
        }
        else{
            error.style.display = 'none';
        }
    }
    function validar(e){
        validarNombre(e);
        validarEmail(e);
        validarSexo(e);
        validarTermminos(e);
    }
formu.addEventListener('submit',validar);
}())