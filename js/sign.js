var signEmail=document.getElementById("signemail");
var signPwd=document.getElementById("signpwd")
var signPhn=document.getElementById("signphn");
var signUser=document.getElementById("signuser")
var emError=document.getElementById("signemerr");
var phnError=document.getElementById("signpherr")
var userError=document.getElementById("signuseerr")
var pwdError=document.getElementById("signpwderr")
var passValid=document.getElementById("passvalid");
var length=document.getElementById("length");
var upper=document.getElementById("upper");
var lower=document.getElementById("lower");
var number=document.getElementById("number");
var color=document.getElementById("colour")
const email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var phoneno =/^\(?([0-9]{3})\)?[. -]?([0-9]{3})[. -]?([0-9]{4})$/;
function signup(){
    emError.innerHTML="";
    userError.innerHTML="";
    pwdError.innerHTML="";
    phnError.innerHTML="";
    if(signEmail.value.trim()==""){
        emError.innerHTML="Email cannot be empty";
        emError.style.color="red";
        return false;
    }else if(!email.test(signEmail.value)){
        emError.innerHTML="Invalid email";
        emError.style.color="red";
        return false;
    }
    else if(signPhn.value.trim()==""){
        phnError.innerHTML="Contact number cannot be empty";
        phnError.style.color="red";
        return false;
    }
    
    else if(!signPhn.value.match(phoneno)){
        phnError.innerHTML="Must contain 10 digits either in the format XXXXXXXXXX , XXX-XXX-XXXX, XXX.XXX.XXXX or XXX XXX XXXX"
        phnError.style.color="red";
        return false;
    }
    else if(signUser.value.trim()==""){
       userError.innerHTML="Username cannot be empty";
       userError.style.color="red";
       return false;
    }else if(signPwd.value.trim()==""){
        pwdError.innerHTML="Password cannot be empty";
        pwdError.style.color="red";
        return false;
    }else if(signPwd.value.length<8){
        pwdError.innerHTML="Password should be of atleast 8 charecters long";
        pwdError.style.color="red";
        return false;
     }else if(!signPwd.value.match(/[a-z]/) || !signPwd.value.match(/[A-Z]/) || !signPwd.value.match(/[0-9]/)){
        pwdError.innerHTML="invalid Password";
        pwdError.style.color="red";
        return false;
     }
    else if(signPwd.value.length>=8 && signPwd.value.match(/[a-z]/) && signPwd.value.match(/[A-Z]/) && signPwd.value.match(/[0-9]/)){
          return true;
    }
    else{
        return true;
    }
}
function Strength(){
    passValid.style.display="block";
    
}
function hide(){
    passValid.style.display="none";
}
function colour(){
    pwdError.style.display="block";
    color.style.display="block";
    
    if(signPwd.value.length>=8){
        length.style.color="green"
    }
    if(signPwd.value.match(/[a-z]/)){
        lower.style.color="green"
    }
     if(signPwd.value.match(/[A-Z]/)){
        upper.style.color="green"
    }
    if(signPwd.value.match(/[0-9]/)){
        number.style.color="green"
    }
    if(signPwd.value.length>=8 && signPwd.value.match(/[a-z]/) && signPwd.value.match(/[A-Z]/) && signPwd.value.match(/[0-9]/)){
        passValid.style.display="none";
        color.innerHTML="Valid Password";
        color.style.color="green";
        pwdError.style.display="none";
    }
    if(signPwd.value.length<8){
        signPwd.style.borderColor="red"
    }
    if(signPwd.value.length==8){
        signPwd.style.borderColor="orange"
    }
    if(signPwd.value.length>8){
        signPwd.style.borderColor="green"
        
    }
}