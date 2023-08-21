let email=document.getElementById("email");
let password=document.getElementById("password");
let btn=document.getElementById("submitBtn");
btn.addEventListener("click",function(event){
    event.preventDefault();
    fetch("login.php",{
        method: "POST",
        headers:{
            "Content-Type":"Application/json",
        },
        body:JSON.stringify({
        'email' : email.value,
        'password' : password.value,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        if(data['message']=="success"){
            window.location.href='../index.html';
        }else{
            document.getElementById("invalidP").style.display='block';
            document.getElementById("invalidP").classList.add("invalid");
            document.getElementById("invalidP").classList.remove("valid");
            document.getElementById("invalidP").textContent=data['message'];
        }
        })
    .catch(error=>{
        alert("Error:",error);
    })
})


