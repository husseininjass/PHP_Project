const swiper = new Swiper('.swiper', {
  
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });

//start the fetch job from here till we end 

let category = document.querySelector('#category');
function fetchCcategory(){
  fetch('admin/admin/cata.php' , {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(" "),

  })
  .then(r => r.json())
  .then(function(data){
    console.log(data);
    data.forEach(function(e , index){
      category.innerHTML += `
      <a href="user/category.html"><option value="${data[index].category_id}">${data[index].name}</option></a>
        
      `
    })
    
  });
}
fetchCcategory();

//cart and profile
let selectCategory=document.getElementById('category');

selectCategory.addEventListener('change',function(){
    
})
document.getElementById('profileIcon').addEventListener('click',function(){
    fetch('./user/checkLogin.php',{
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
            window.location.href=('./user/login.html');
        }else{
                window.location.href=('./user/profile.html');
        }
    })
    .catch(error=>{
        alert("Error:",error);
    })

})

function checkUser(){
  fetch('./user/checkLogin.php',{
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
          window.location.href=('./user/login.html');
      }else{
              window.location.href=('./user/cart.html');
      }
  })
  .catch(error=>{
      alert("Error:",error);
  })

}




