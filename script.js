document.getElementById('login-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const userEmail=emailField.value;
    console.log(userEmail);
    const password=document.getElementById('user-password')
    const userPassword=password.value;
    console.log(userPassword)
    if(userEmail=='sontan@bapgmail.com'&& userPassword=='secret'){
            window.location.href='banking.html'
    }
})