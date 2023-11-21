

function register() {

    var email = document.getElementById("email").value;
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var data = {
        email: email,
        name: username,
        password: password
    }
    stringifyData = JSON.stringify(data)
    localStorage.setItem("User", stringifyData)
}


function login() {
    var userEmail = document.getElementById("userEmail").value;
    var userPass = document.getElementById("userPassword").value;
    const userInfo = localStorage.getItem("User")
    const parsedUserInfo = JSON.parse(userInfo);
    if (userEmail === parsedUserInfo.email && userPass === parsedUserInfo.password) {
        alert("Right")
        window.location.href = "Dashboard.html"
    }
    else {
        alert("Wrong")
    }
}


function logout(){
    localStorage.removeItem("User")
    window.location.href = "index.html"
}


