var password = document.getElementById("password");
var conpassword = document.getElementById("con-password");
var pp = document.querySelector(".pp");
var cp = document.querySelector(".cp");
var username = document.getElementById("username")
var signup = document.getElementById("signup")
password.oninput = function() {
    var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(password.value.match(check)){
        pp.style.display = 'none';
        password.style.border = "2px solid green";

    }
    else{
        password.classList.remove("valid");
        // password.classList.add("invalid")
        password.style.border = "2px solid red";
        pp.style.display = 'block';
    }
}
password.onchange = function(){  
      pp.style.display = 'none';
}

conpassword.oninput = function() {
    if(conpassword.value === password.value){
        conpassword.style.border = "2px green solid"
        cp.style.display = 'none';

    }
    else{
        cp.style.display = 'block';
        conpassword.style.border='2px solid red'
    }
}
conpassword.onchange = function(){
    cp.style.display = 'none';
}
signup.addEventListener('click',()=>{
    if(username.value.trim() && password.value.trim() && conpassword.value.trim() === ''){
        signup.disabled = "true"
    }
    else{
        signup.disabled="false"
    }
})

