var logUser=document.getElementById("loguser");
var logPwd=document.getElementById("logpwd");
var logUserError=document.getElementById("loguserr");
var logPwdError=document.getElementById("logpderr");
console.log("jaiiiiii")

function log(){
    logUserError.innerHTML="";
    logPwdError.innerHTML="";
    if(logUser.value.trim()==""){
       logUserError.innerHTML="Username cannot be empty";
       logUserError.style.color="red";
       return false;
    }else if(logPwd.value.trim()==""){
        logPwdError.innerHTML="Password cannot be empty";
        logPwdError.style.color="red";
        return false;
    }else{
        return true;
    }
}
function logo(){
   console.log(logUser.value)
if(logPwd.value.trim()==""){
    logPwdError.innerHTML="emoty"
}else{
    console.log("ba;")
}
}