function siguiente(){

    email_login = document.getElementById('email').value
    pass_login = document.getElementById('pass').value

    name = localStorage.getItem('name');
    last_name = localStorage.getItem('last-name');
    email = localStorage.getItem('email');
    pass = localStorage.getItem('pass');

    if(email_login === email && pass_login === pass){
        window.location.assign('../html/inicio.html')
    }
    else{
        alert('Contraseña incorrecta')
    }
}

function btnRegistro(){
    window.location.assign('../html/registro.html');
}