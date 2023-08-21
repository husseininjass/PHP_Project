let product_id=localStorage.getItem('product_id');
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
        // let img=document.createElement('img');
        // img.setAttribute('src',"../images/" + element['photo']);
        let nameP=document.createElement('p');
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
        countInput.value=1;
        countP.appendChild(countInput);
        detailsDiv.appendChild(countP);
        let addCartBtn=document.createElement('input');
        addCartBtn.setAttribute('type','button');
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
                // commentP.style.display='flex';
                let fnameP=document.createElement('p');
                fnameP.style.width='10%';
                // fnameP.style.border='1px solid black';

                let comment=document.createElement('p');
                fnameP.textContent=element['first_name'];
                comment.textContent=element['comment'];
                // comment.style.border='1px solid black';
                commentP.appendChild(fnameP);
                commentP.appendChild(comment);
                document.getElementById('commentDiv').appendChild(commentP);

            })
            let addComment=document.createElement('textarea');
            addComment.setAttribute('cols',30);
            addComment.setAttribute('rows',5); 
            addComment.setAttribute('id','textareaComment'); 
            document.getElementById('commentDiv').appendChild(addComment);
            let commentBtn=document.createElement('input');
            commentBtn.setAttribute('type','button');
            commentBtn.setAttribute('value','Add Comment');
            commentBtn.setAttribute('onclick','addComment()');
            document.getElementById('commentDiv').appendChild(commentBtn);


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