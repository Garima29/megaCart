document.getElementById("login").onclick=function(){
    let username = document.getElementById("login-name").value;
    let password = document.getElementById("login-password").value;
    console.log(username);
    console.log(password);
    if (username == "garima" && password == "pass123]"){
        localStorage["username"]=JSON.stringify(username);
        location.href="main.html";
    }else{
        alert("Invalid credentials!");
    }
}