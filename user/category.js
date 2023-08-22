let category=localStorage.getItem('category_id');
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
    // console.log(data);
    if(data == false){
        document.getElementById('profileIcon').style.display='none';
        document.getElementById('cartIcon').style.display='none';
        document.getElementById('logoutIcon').style.display='none';

    }else{
        document.getElementById('loginLi').style.display='none';
        document.getElementById('signupLi').style.display='none';
        
    }
})
.catch(error=>{
    alert("Error:",error);
})

fetch("category.php",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        category:category,
}),
})
.then(response=>response.json())
.then(data=>{
    // console.log(data);
    data.map(element=>{
        let imgDiv=document.createElement('div');
        let img=document.createElement('img');
        let detailsDiv=document.createElement('div');
        let nameP=document.createElement('p');
        let nameA=document.createElement('a');
        let priceDiv=document.createElement('div');
        let priceSpan=document.createElement('span');
        let cartP=document.createElement('input');
        img.setAttribute('src',"../admin/product_images/"+ element['photo']);
        img.style.height='200px';
        imgDiv.appendChild(img);
        imgDiv.style.textAlign='center';
        imgDiv.style.marginBottom='10%';
        detailsDiv.appendChild(imgDiv);
        nameA.textContent=element['product_name'];
        nameA.setAttribute('href',"./product.html");
        nameA.setAttribute('onclick',"productNameClick(" + element['product_id'] + ")");
        nameA.style.textDecoration='none';
        nameP.appendChild(nameA);
        priceSpan.textContent=element['price'] + " JOD  ";
        priceDiv.appendChild(priceSpan);
        if(+element['sale']!=0){
            let saleSpan=document.createElement('span');
            priceSpan.style.textDecoration='line-through';
            priceSpan.style.color='red';
            saleSpan.textContent=(+element['price'])-(+element['price'])*(+element['sale'])/100 +" JOD";
            priceDiv.appendChild(saleSpan);
        }
        cartP.setAttribute('type','button');
        cartP.setAttribute('class','btn btn-primary');
        cartP.setAttribute('value','Add To Cart');
        cartP.setAttribute('onclick',"addToCart(" + element['product_id'] + ")");
        detailsDiv.style.width='30%';
        detailsDiv.style.border='1px solid black';
        detailsDiv.style.padding='1%';
        detailsDiv.appendChild(nameP);
        detailsDiv.appendChild(priceDiv);
        detailsDiv.appendChild(cartP);
        document.getElementById('productCard').appendChild(detailsDiv);
    })
})
.catch(error=>{
    alert("Error:",error);
});
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

function addToCart(product_id){
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
        // console.log(data);
        if(data==false){
            window.location.href=('./login.html')
        }else{
            fetch('addToCart.php',{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    product_id:product_id,
            }),
            })
            .then(response=>response.json())
            .then(data=>{
                // console.log(data);
            })
            .catch(error=>{
                alert("Error:",error);
            })
        }
    })
    .catch(error=>{
        alert("Error:",error);
    })
}

function productNameClick(product_id){
    localStorage.setItem('product_id',product_id);

}
function logout(){
    fetch('logout.php',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        // console.log(data);
        window.location.href=('../index.html');
    })
    .catch(error=>{
        alert("Error:",error);
    })
}


let categoryid = document.querySelector('#category');

function fetchCategory() {
  fetch('../admin/admin/cata.php', {
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
      categoryid.appendChild(option)
    })
  })
}
fetchCategory();

categoryid.addEventListener("change", function() {
  const selected = categoryid.value
  if (selected) {
    window.location.href = "./category.html"
  }
})
