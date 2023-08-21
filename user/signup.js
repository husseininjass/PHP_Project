let userObject={};
let firstNameFlag=0;
let middleNameFlag=0;
let lastNameFlag=0;
let familyNameFlag=0;
let emailFlag=0;
let mobileFlag=0;
let passwordFlag=0;
let confPasswordFlag=0;
let cityFlag=0;
let addressFlag=0;

let up=0;
let lw=0;
let nm=0;
let sp=1;
let sc=0;
let lg=0;


//.....................first name.............. //
//.....................first name.............. //
//.....................first name.............. //

let firstName=document.getElementById("fname");
firstName.addEventListener("focus",function(){
    if(firstNameFlag==0){
        document.getElementById("fnameP").style.display="block";
        document.getElementById("fnameP").classList.remove("valid");
        document.getElementById("fnameP").classList.add("invalid");
    }else{
            document.getElementById("fnameP").style.display="none";
    }
})
firstName.addEventListener("blur",function(){
    document.getElementById("fnameP").style.display="none";
})
firstName.addEventListener("keyup",function(){
    let fNameRE=/[a-zA-Z]{1,}/g;
    if(firstName.value.match(fNameRE)==firstName.value){
        document.getElementById("fnameP").style.display='none';
        document.getElementById("fname").style.border='3px solid rgb(45, 190, 45)';
        firstNameFlag=1;
    }else{
        document.getElementById("fname").style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("fnameP").style.display='block';
        document.getElementById("fnameP").classList.remove("valid");
        document.getElementById("fnameP").classList.add("invalid");
        firstNameFlag=0;
    }
})

//.....................last name.............. //
//.....................last name.............. //
//.....................last name.............. //

let lastName=document.getElementById("lname");
lastName.addEventListener("focus",function(){
    if(lastNameFlag==0){
        document.getElementById("lnameP").style.display="block";
        document.getElementById("lnameP").classList.remove("valid");
        document.getElementById("lnameP").classList.add("invalid");
    }else{
            document.getElementById("lnameP").style.display="none";
    }
})
lastName.addEventListener("blur",function(){
    document.getElementById("lnameP").style.display="none";
})
lastName.addEventListener("keyup",function(){
    let lNameRE=/[a-zA-Z]{1,}/g;
    if(lastName.value.match(lNameRE)==lastName.value){
        document.getElementById("lnameP").style.display='none';
        document.getElementById("lname").style.border='3px solid rgb(45, 190, 45)';
        lastNameFlag=1;
    }else{
        document.getElementById("lnameP").style.display='block';
        document.getElementById("lname").style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("lnameP").classList.remove("valid");
        document.getElementById("lnameP").classList.add("invalid");
        lastNameFlag=0;
    }
})

//.....................Email.............. //
//.....................Email.............. //
//.....................Email.............. //

let email=document.getElementById("email");
email.addEventListener("focus",function(){
    if(emailFlag==0){
    document.getElementById("emailP").style.display="block";
    document.getElementById("emailP").classList.remove("valid");
    document.getElementById("emailP").classList.add("invalid");
    }else{
        document.getElementById("emailP").style.display="none";
    }
})
email.addEventListener("blur",function(){
    document.getElementById("emailP").style.display="none";
})
email.addEventListener("keyup",function(){
    let emailRE=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(email.value.match(emailRE)){
        document.getElementById("emailP").style.display='none';
        document.getElementById("email").style.border='3px solid rgb(45, 190, 45)';
        emailFlag=1;
    }else{
        document.getElementById("emailP").style.display='block';
        document.getElementById("email").style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
        emailFlag=0;
    }
    
})

//.....................Mobile.............. //
//.....................Mobile.............. //
//.....................Mobile.............. //

let mobile=document.getElementById("mobile");
mobile.addEventListener("focus",function(){
    if(mobileFlag==0){
        document.getElementById("mobileNumP").style.display="block";
        document.getElementById("mobileNumP").classList.remove("valid");
        document.getElementById("mobileNumP").classList.add("invalid");
        }else{
            document.getElementById("mobileNumP").style.display="none";
        }
})
mobile.addEventListener("blur",function(){
    document.getElementById("mobileNumP").style.display="none";
})
mobile.addEventListener("keyup",function(){
    let mobileRE=/^\d{10}$/;
    if(mobile.value.match(mobileRE)){
        document.getElementById("mobileNumP").style.display='none';
        document.getElementById("mobile").style.border='3px solid rgb(45, 190, 45)';
        mobileFlag=1;
    }else{
        document.getElementById("mobileNumP").style.display='block';
        document.getElementById("mobile").style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("mobileNumP").classList.remove("valid");
        document.getElementById("mobileNumP").classList.add("invalid");
        mobileFlag=0;
    }
    
})

//.....................Password.............. //
//.....................Password.............. //
//.....................Password.............. //
/*
let up=0;
let lw=0;
let nm=0;
let sp=0;
let sc=0;
let lg=0;*/
let password=document.getElementById("password");
password.addEventListener("focus",function(){
    if(up==0){
        document.getElementById("capitalPass").style.display="block";
    }else{
        document.getElementById("capitalPass").style.display="none";
    }
    if(lw==0){
        document.getElementById("letterPass").style.display="block";
    }else{
        document.getElementById("letterPass").style.display="none";
    }
    if(nm==0){
        document.getElementById("numberPass").style.display="block";
    }else{
        document.getElementById("numberPass").style.display="none";
    }
    if(sc==0){
        document.getElementById("spChPass").style.display="block";
    }else{
        document.getElementById("spChPass").style.display="none";
    }
    if(sp==0){
        document.getElementById("spacePass").style.display="block";
    }else{
        document.getElementById("spacePass").style.display="none";
    }
    if(lg==0){
        document.getElementById("lengthPass").style.display="block";
    }else{
        document.getElementById("lengthPass").style.display="none";
    }
})
password.addEventListener("blur",function(){
    document.getElementById("capitalPass").style.display="none";
    document.getElementById("letterPass").style.display="none";
    document.getElementById("numberPass").style.display="none";
    document.getElementById("spChPass").style.display="none";
    document.getElementById("spacePass").style.display="none";
    document.getElementById("lengthPass").style.display="none";
})
password.addEventListener("keyup",function(){    
    var upperCaseLetters = /([A-Z])/g;
    if(password.value.match(upperCaseLetters)) {  
        capitalPass.style.display='none';
        up=1;
    } else {
        capitalPass.style.display='block';
        up=0;
    }
    var lowerCaseLetters = /(?=.*[a-z])/g;
    if(password.value.match(lowerCaseLetters)) {  
        letterPass.style.display='none';
        lw=1;
    } else {
        letterPass.style.display='block';
        lw=0;
    }
    var numbers = /(?=.*\d)/g;
    if(password.value.match(numbers)) {  
        numberPass.style.display='none';
        nm=1;
    } else {
        numberPass.style.display='block';
        nm=0;
    }
    var noSpace=/^\S*$/;
    if(password.value.match(noSpace)){
        spacePass.style.display='none';
        sp=1;
    } else {
        spacePass.classList.remove("valid");
        spacePass.classList.add("invalid");
        spacePass.style.display='block';
        sp=0;
    }
    var special=/[!@#/?\$%\^\&*\)\(+=._-]{1,}/g;
    if(password.value.match(special)){
        spChPass.style.display='none';
        sc=1;
    } else {
        spChPass.classList.remove("valid");
        spChPass.classList.add("invalid");
        spChPass.style.display='block';
        sc=0;
    }
    if(password.value.length >= 8 && password.value.length<=32) {
        lengthPass.style.display='none';
        lg=1;
    } else {
        lengthPass.classList.remove("valid");
        lengthPass.classList.add("invalid");
        lengthPass.style.display='block';
        lg=0;
    }if(up && lw && nm && sp && sc && lg){
        document.getElementById("password").style.border='3px solid rgb(45, 190, 45)';
        passwordFlag=1;

    }
    else{
        document.getElementById("password").style.border='3px solid rgb(201, 98, 98)';
        passwordFlag=0;
    }
    if(password.value===confPassword.value){
        document.getElementById("confPassP").style.display='none';
        document.getElementById("confPassword").style.border='3px solid rgb(45, 190, 45)';
        confPasswordFlag=1;
    }else{
        document.getElementById("confPassP").style.display='block';
        document.getElementById("confPassword").style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("confPassP").classList.remove("valid");
        document.getElementById("confPassP").classList.add("invalid");
        confPasswordFlag=0;
    }
})

//.....................Confirm Password.............. //
//.....................Confirm Password.............. //
//.....................Confirm Password.............. //

let confPassword=document.getElementById("confPassword");
confPassword.addEventListener("focus",function(){
    if(confPasswordFlag==0){
        confPassword.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("confPassP").style.display="block";
        document.getElementById("confPassP").classList.remove("valid");
        document.getElementById("confPassP").classList.add("invalid");
    }else{
        confPassword.style.border='3px solid rgb(45, 190, 45)'
        document.getElementById("confPassP").style.display="none";
    }
})
confPassword.addEventListener("blur",function(){
    document.getElementById("confPassP").style.display="none";
})
confPassword.addEventListener("keyup",function(){
    if(password.value===confPassword.value){
        document.getElementById("confPassP").style.display='none';
        document.getElementById("confPassword").style.border='3px solid rgb(45, 190, 45)';
        confPasswordFlag=1;
    }else{
        document.getElementById("confPassP").style.display='block';
        document.getElementById("confPassword").style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("confPassP").classList.remove("valid");
        document.getElementById("confPassP").classList.add("invalid");
        confPasswordFlag=0;
    }
})

//..................... City.............. //
//..................... City.............. //
//..................... City.............. //
let city=document.getElementById("city");

city.addEventListener("blur",function(){
    if(cityFlag==0){
        document.getElementById("city").style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("cityP").style.display="none";
    }else{
        document.getElementById("city").style.border='3px solid rgb(45, 190, 45)';
        document.getElementById("cityP").style.display="none";
    }
})
city.addEventListener("change",function(){
    if(city.value==="City"){
        document.getElementById("city").style.border='3px solid rgb(201, 98, 98)';
        cityFlag=0;
    }else{
        document.getElementById("city").style.border='3px solid rgb(45, 190, 45)';
        document.getElementById("cityP").style.display="none";
        cityFlag=1;
    }
})

//..................... Address.............. //
//..................... Address.............. //
//..................... Address.............. //

let address=document.getElementById("addressText");
address.addEventListener("blur",function(){
    if(addressFlag==0){
        address.style.border="3px solid rgb(201, 98, 98)";
    }else{
        address.style.border="3px solid rgb(45, 190, 45)";
    }
})
address.addEventListener("keyup",function(){
    if(address.value==""){
        address.style.border="3px solid rgb(201, 98, 98)";
        addressFlag=0;
    }else{
        addressFlag=1;
        address.style.border="3px solid rgb(45, 190, 45)";
    }
})

//..................... submit .............. //
//..................... submit .............. //
//..................... submit .............. //

let btn=document.getElementById("submitBtn");
btn.addEventListener("click",function(event){

    if(firstNameFlag ==0){
        event.preventDefault();
        firstName.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("fnameP").style.display="block";
        document.getElementById("fnameP").classList.remove("valid");
        document.getElementById("fnameP").classList.add("invalid");
    }
    if(lastNameFlag ==0){
        event.preventDefault();
        lastName.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("lnameP").style.display="block";
        document.getElementById("lnameP").classList.remove("valid");
        document.getElementById("lnameP").classList.add("invalid");
    }
    if(emailFlag ==0){
        event.preventDefault();
        email.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("emailP").style.display="block";
        document.getElementById("emailP").classList.remove("valid");
        document.getElementById("emailP").classList.add("invalid");
    }
    if(mobileFlag ==0){
        event.preventDefault();
        mobile.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("mobileNumP").style.display="block";
        document.getElementById("mobileNumP").classList.remove("valid");
        document.getElementById("mobileNumP").classList.add("invalid");
    }
    if(passwordFlag==0){
        event.preventDefault();
        password.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("capitalPass").style.display="block";
        document.getElementById("letterPass").style.display="block";
        document.getElementById("numberPass").style.display="block";
        document.getElementById("spChPass").style.display="block";
        document.getElementById("spacePass").style.display="none";
        document.getElementById("lengthPass").style.display="block";
    }
    if(confPasswordFlag==0){
        event.preventDefault();
        confPassword.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("confPassP").style.display="block";
    }
    if(cityFlag==0){
        event.preventDefault();
        city.style.border='3px solid rgb(201, 98, 98)';
        document.getElementById("cityP").style.display="block";
    }
    if(addressFlag==0){
        event.preventDefault();
        address.style.border="3px solid rgb(201, 98, 98)";
    }
    if(firstNameFlag && lastNameFlag && emailFlag && mobileFlag && passwordFlag && confPasswordFlag && cityFlag && addressFlag ){
        event.preventDefault();
        fetch("create.php",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName : firstName.value,
                lastName : lastName.value,
                email : email.value,
                mobile :mobile.value,
                password : password.value,
                city:city.value,
                address:address.value
        }),
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.message=="Email Not Valid"){
                document.getElementById("notValidP").textContent="Email Not Valid";
                document.getElementById("notValidP").style.display="block";
            }else{
                firstName.value="";
                lastName.value="";
                email.value="";
                mobile.value="";
                password.value="";
                confPassword.value="";
                city.value="city";
                address.value="";
                firstNameFlag=lastNameFlag=emailFlag=mobileFlag=passwordFlag=confPasswordFlag=cityFlag=addressFlag=0;
                window.location.href='./login.html';
            }
        })
        .catch(error=>{
            console.error("Error:",error);
        })
    }
})