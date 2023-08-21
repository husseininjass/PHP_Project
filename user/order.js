fetch("order.php",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
    }),
})
.then(response=>response.json())
.then(data=>{
    console.log(data);
    data.map(element=>{
        let order=document.getElementById('orderDiv');
        if(element['status']==0){
            let order_idP=document.createElement('p');
            // order_idP.setAttribute('onclick',"orderDetails(" + element['order_id'] + ")");
            order_idP.textContent="Order ID : " + element['order_id'];
            let status=document.createElement('p');
            status.textContent='Status : Preparing';
            let timeP=document.createElement('p');
            timeP.textContent='Date & Time : ' + element['date_time'];
            order.appendChild(order_idP);
            order.appendChild(status);
            order.appendChild(timeP);
            let btn=document.createElement('input');
            btn.setAttribute('type','button');
            btn.setAttribute('value','details');
            btn.setAttribute('onclick',"orderDetails(" + element['order_id'] + ")");
            order.appendChild(btn);
        }else{
            let order_idP=document.createElement('p');
            // order_idP.setAttribute('click',"orderDetails(" + element['order_id'] + ")");
            order_idP.textContent="Order ID : " + element['order_id'];
            let status=document.createElement('p');
            status.textContent='Status : Done';
            let timeP=document.createElement('p');
            timeP.textContent='Date & Time : ' + element['date_time'];
            order.appendChild(order_idP);
            order.appendChild(status);
            order.appendChild(timeP);
            let btn=document.createElement('input');
            btn.setAttribute('type','button');
            btn.setAttribute('value','details');
            btn.setAttribute('onclick',"orderDetails(" + element['order_id'] + ")");
            order.appendChild(btn);
        }
    })
})
.catch(error=>{
    alert("Error:",error);
})

function orderDetails(order_id){
    fetch("orderDetails.php",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            order_id:order_id,
        }),
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        data.map(element=>{
            let details=document.getElementById('detailsDiv');
            // let productImgP=document.createElement('p');
            // let img=document.createElement('img');
            // img.setAttribute('src','../images/' + element['photo']);
            // productImgP.appendChild(img);
            // details.appendChild(productImgP);
            let productName=document.createElement('p');
            productName.textContent="Product Name : "+ element['product_name'];
            details.appendChild(productName);
            let count=document.createElement('p');
            count.textContent="Count : "+element['conte'];
            details.appendChild(count);
            let price=document.createElement('p');
            price.textContent="Price : "+element['price'];
            details.appendChild(price);
        })
    })
    .catch(error=>{
        alert("Error:",error);
    })
}