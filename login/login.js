function login() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;

    if (user === "") {
        document.getElementById('uval').innerHTML = "* Enter your username";
    } else if (pass === "") {
        document.getElementById('pass').innerHTML = "* Enter your password";
    } else {
        document.getElementById('exist').innerHTML = "* Username does not exist. Please create an account.";
    }
}


   
