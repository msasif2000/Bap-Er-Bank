document.getElementById('btn').addEventListener('click', function(){
    const emailField=document.getElementById('email');
    const email= emailField.value;
     //console.log(email);

    const passField=document.getElementById('pass');
    const pass= passField.value;
    //console.log(pass);
    if(email=='sontan@gmail.com' && pass=='secret'){
        window.location.href='bank.html';
    }
    else {
        alert('invalid email or password');
    }
})