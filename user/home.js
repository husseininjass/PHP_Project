let selectCategory=document.getElementById('categorySelect');

selectCategory.addEventListener('change',function(){
    localStorage.setItem('category_id',selectCategory.value);
    window.location.href=("./category.html");
})
document.getElementById('profileIcon').addEventListener('click',function(){
    fetch('checkLogin.php',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        if(data == false){
            window.location.href=('./login.html');
        }else{
                window.location.href=('./profile.html');
        }
    })
    .catch(error=>{
        alert("Error:",error);
    })

})

function checkUser(){
  fetch('checkLogin.php',{
      method: "POST",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify({
  }),
  })
  .then(response=>response.json())
  .then(data=>{
      if(data == false){
          window.location.href=('./login.html');
      }else{
              window.location.href=('./cart.html');
      }
  })
  .catch(error=>{
      alert("Error:",error);
  })

}

