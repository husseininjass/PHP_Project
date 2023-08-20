let select=document.getElementsByClassName("form-select");
let category1=document.getElementsByClassName("category1");
let category2=document.getElementsByClassName("category2");
let category3=document.getElementsByClassName("category3");
let category4=document.getElementsByClassName("category4");
// let btn=document.getElementById("submitBtn");
// btn.addEventListener("click",function(event){
//     event.preventDefault();
//     fetch("Category.php",{
//         method: "POST",
//         headers:{
//             "Content-Type":"Application/json",
//         },
//         body:JSON.stringify({
//         'email' : email.value,
//         'password' : password.value,
//     }),
//     })
//     .then(response=>response.json())
//     .then(data=>{
//         if(data['message']=="success"){
//             window.location.href='./home.html';
//         }else{
//             document.getElementById("invalidP").style.display='block';
//             document.getElementById("invalidP").classList.add("invalid");
//             document.getElementById("invalidP").classList.remove("valid");
//             document.getElementById("invalidP").textContent=data['message'];
//         }
//         })
//     .catch(error=>{
//         alert("Error:",error);
//     })
// })

