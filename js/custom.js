document.getElementById("sign-up").onclick=function(){
    let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
    let emailString = document.getElementById("email").value;
    let usernameString = document.getElementById("username").value;
    //to make sure that given number has digits between 0-9 and max length of 10 digits 
    let phoneNumberPattern = new RegExp("(?= [0-9]{10})"); 
    
    // ^([0-9\s\-\+\(\)]*)$
    let phoneString = document.getElementById("mobile").value;
    //to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
    let passworPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])"); 
    let passwordString = document.getElementById("password").value;
    let confirmString = document.getElementById("confirm-password").value;
    document.getElementById("email-err").innerHTML="";
    document.getElementById("mobile-err").innerHTML="";
    document.getElementById("password-err").innerHTML="";
    document.getElementById("confirm-password-err").innerHTML="";
    try {
        if(usernameString == "") throw "Username is empty";
        if(emailString == "") throw "Email id is empty";
        if(phoneString == "") throw "Mobile number is empty";
        if(passwordString == "") throw "Password is empty";
        if(!(emailPattern.test(emailString))) throw "Email Id is invalid! It should contain@ and .";
        if(!(passwordString === confirmString)) throw "Password doest not match!";     
        localStorage.setItem["username"]=JSON.stringify(usernameString);
        localStorage.setItem["password"]=JSON.stringify(passwordString);
        location.href='main.html';
    }
    catch(err){
        document.getElementById("confirm-password-err").innerHTML=err;
    }
}
