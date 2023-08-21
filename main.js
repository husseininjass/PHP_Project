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

function fetchCategory() {
  fetch('admin/admin/cata.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(" "),
  })
  .then(r => r.json())
  .then(function(data) {
    data.forEach(function(e, index) {
      const option = document.createElement("option");
      option.value = data[index].category_id;
      option.textContent = data[index].name
      category.appendChild(option)
    })
  })
}
fetchCategory();

category.addEventListener("change", function() {
  const selected = category.value
  if (selected) {
    window.location.href = "user/category.html"
  }
})



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

