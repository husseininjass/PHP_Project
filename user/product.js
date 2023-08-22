let product_id=localStorage.getItem('product_id');
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

let categoryid = document.querySelector('#categoryselect');

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


fetch("product.php",{
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
    data.map(element=>{
        let detailsDiv=document.getElementById('detailsDiv');
        let imgDiv=document.createElement('div');
        let img=document.createElement('img');
        img.setAttribute('src',"../admin/product_images/"+ element['photo']);
        img.style.height='300px';
        imgDiv.appendChild(img);
        imgDiv.style.textAlign='center';
        imgDiv.style.marginBottom='10%';
        detailsDiv.appendChild(imgDiv);


        let nameP=document.createElement('p');
        nameP.setAttribute('class','nameOfProduct')
        nameP.textContent=element['product_name'];
        detailsDiv.appendChild(nameP);
        let description=document.createElement('p');
        description.textContent=element['description'];
        detailsDiv.appendChild(description);
        let priceP=document.createElement('p');
        let priceLabelSpan=document.createElement('span');
        priceLabelSpan.textContent='Price: ';
        priceP.appendChild(priceLabelSpan)
        let priceSpan=document.createElement('span');
        priceSpan.textContent=element['price'] + " JOD";
        priceP.appendChild(priceSpan);
        if((+element['sale'])!=0){
            let saleSpan=document.createElement('span');
            priceSpan.style.textDecoration='line-through';
            priceSpan.style.color='red';
            let sale=(+element['price'])-(+element['price'])*(+element['sale'])/100
            saleSpan.innerHTML="&nbsp;&nbsp;" + sale + " JOD";
            priceP.appendChild(saleSpan);
        }
        detailsDiv.appendChild(priceP)
        let countP=document.createElement('p');
        let countSpan=document.createElement('span');
        countSpan.textContent="Count ";
        countP.appendChild(countSpan);
        let countInput=document.createElement('input');
        countInput.setAttribute('type','number');
        countInput.setAttribute('id','countNumber');
        countInput.style.width='30px';
        countInput.value=1;
        countP.appendChild(countInput);
        detailsDiv.appendChild(countP);
        let addCartBtn=document.createElement('input');
        addCartBtn.setAttribute('type','button');
        addCartBtn.setAttribute('class','btn btn-primary');
        addCartBtn.setAttribute('value','Add Cart');
        addCartBtn.setAttribute('onclick',"AddCart()");
        detailsDiv.appendChild(addCartBtn);
        fetch('viewComments.php',{
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
            data.map(element=>{
                // console.log(element['comment']);
                // console.log(element['first_name']);
                let commentP=document.createElement('p');
                commentP.style.border='2px solid rgb(116, 116, 116)';
                commentP.style.width='50%';
                commentP.style.marginLeft='auto';
                commentP.style.marginRight='auto';

                commentP.style.borderRadius='10px';
                // commentP.style.display='flex';
                let fnameP=document.createElement('p');
                fnameP.style.width='10%';
                fnameP.style.color='blue';
                fnameP.style.paddingLeft='2%';
                fnameP.style.paddingTop='2%';
                // fnameP.style.border='1px solid black';

                let comment=document.createElement('p');
                fnameP.textContent=element['first_name'];
                comment.textContent=element['comment'];
                comment.style.marginLeft='10%';
                
                // comment.style.border='1px solid black';
                commentP.appendChild(fnameP);
                commentP.appendChild(comment);
                document.getElementById('commentDiv').appendChild(commentP);

            })
            let addCommentP=document.createElement('p');
            addCommentP.style.marginLeft='auto';
            addCommentP.style.marginRight='auto';
            addCommentP.style.width='50%';
            let addComment=document.createElement('textarea');
            addComment.setAttribute('cols',50);
            addComment.setAttribute('placeholder','Write your comment here...');
            addComment.setAttribute('rows',2); 
            addComment.setAttribute('id','textareaComment'); 
            addCommentP.appendChild(addComment);
            // document.getElementById('commentDiv').appendChild(addComment);
            let commentBtn=document.createElement('input');
            commentBtn.setAttribute('type','button');
            commentBtn.setAttribute('value','Add Comment');
            commentBtn.setAttribute('class','btn btn-primary');
            commentBtn.setAttribute('onclick','addComment()');
            addCommentP.appendChild(commentBtn);
            document.getElementById('commentDiv').appendChild(addCommentP);


        })
        .catch(error=>{
            alert("Error:",error);
        })


    })
    
})
.catch(error=>{
    alert("Error:",error);
})

function AddCart(){
    let count=document.getElementById('countNumber').value;
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
            fetch("addCartFromProductPAge.php",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    product_id:product_id,
                    count:count
            }),
            })
            .then(response=>response.json())
            .then(data=>{
                document.getElementById('addToCart').textContent='Added to CART';
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

function addComment(){
    let comment=document.getElementById('textareaComment').value;
    fetch('addComment.php',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            product_id:product_id,
            comment:comment,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        // console.log(data);
        window.location.href=('./product.html');
    })
    .catch(error=>{
        alert("Error:",error);
    })
}

document.getElementById('logoutIcon').addEventListener('click',function(){

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
  
  })
  




