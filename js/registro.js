function registro(){
    name = document.getElementById('name').value;
    last_name= document.getElementById('last_name').value;
    email = document.getElementById('email').value;
    pass = document.getElementById('pass').value;

    localStorage.setItem('name', name)
    localStorage.setItem('last-name', last_name)
    localStorage.setItem('email', email)
    localStorage.setItem('pass', pass)

    window.location.assign('../html/login.html');
}