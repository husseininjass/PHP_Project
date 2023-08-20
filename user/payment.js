fetch('userData.php')
.then(response=>response.json())
.then(data=>{
    // console.log(data[0]['phone']);

    let addressInfoDiv=document.getElementById('userInfo');
    let userEmail=document.createElement('p');
    let userAddress=document.createElement('p');
    let userPhone=document.createElement('p');

    userEmail.textContent="Email: " + data[0]['email'];
    userAddress.textContent="Address: " + data[0]['city'] + ", " + data[0]['address'];
    userPhone.textContent="Phone: 0" + data[0]['phone'];

    addressInfoDiv.appendChild(userEmail);
    addressInfoDiv.appendChild(userAddress);
    addressInfoDiv.appendChild(userPhone);
    addressInfoDiv.style.width='70%';
    addressInfoDiv.style.margin='0 auto';

})
.catch(error=>{
alert("Error:",error);
});


let total=0;
fetch("viewCart.php",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
}),
})
.then(response=>response.json())
.then(data=>{
    data.map(element=>{
        // console.log(element);
        let item = document.createElement('div');
        let product_id = document.createElement('p');
        let product_photo = document.createElement('p');
        let photo=document.createElement('img');
        let product_name = document.createElement('p');
        let product_count = document.createElement('p');
        let product_price = document.createElement('p');

        product_id.textContent=element['product_id'];
        product_id.style.display='none';
        photo.setAttribute('src',element['photo']);
        photo.setAttribute('alt',"photo");
        photo.style.height='50px';
        product_photo.appendChild(photo);
        product_name.textContent=element['product_name'];
        product_count.textContent="Count: " + element['conte'];
        product_price.textContent="Price: " + element['price']*element['conte'];

        item.appendChild(product_id);
        item.appendChild(product_photo);
        item.appendChild(product_name);
        item.appendChild(product_count);
        item.appendChild(product_price);
        document.getElementById('cartInfo').appendChild(item);
        document.getElementById('cartInfo').style.width='70%';
        document.getElementById('cartInfo').style.margin='0 auto'
        item.style.display="flex";
        item.style.justifyContent="space-around";
        // item.style.width='70%';
        item.style.margin='0 auto';
        item.style.border='2px solid black';
        item.style.marginBottom='1%';
        total+=element['price']*element['conte'];
        document.getElementById('totalSpan').textContent="Total Price: \n " + total + " JOD";
    })
})
.catch(error=>{
    alert("Error:",error);
})


//.................Order Button..................//
//.................Order Button..................//
//.................Order Button..................//
document.getElementById('orderBtn').addEventListener('click',function(){
    fetch("payment.php",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({ 
            edit:1,
        }),
    })
    .then(response=>response.json())
    .then(data=>{
        data.map(element=>{
            // let diff=
            // console.log("quantity",element['quantity']," ", "count",element['conte']);

            // let quantity=element['quantity'];
            // let count=element['conte'];
            // console.log(element['quantity']);
            // console.log(element['conte']);
            // console.log(typeof(quantity));
            // console.log( (quantity >= count));
            if(+element['quantity'] >= +element['conte']){
                localStorage.setItem('is_ready',1);
                 quantity=element['quantity']-element['conte'];
                //update quantities in products table 
                fetch("payment.php",{
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({ 
                        edit:2,
                        quantity:quantity,
                        product_id:element['product_id'],
                    }),
                })
                .then(response=>response.json())
                .then(data=>{
                })
                .catch(error=>{
                    alert("Error:",error);
                  })
                  
                  //add order in orders table
                //   fetch("addOrder.php",{
                //     method: "POST",
                //     headers:{
                //         "Content-Type":"application/json",
                //     },
                //     body:JSON.stringify({ 
                //         edit:3,
                //     }),
                // })
                // .then(response=>response.json())
                // .then(data=>{
                // })
                // .catch(error=>{
                //     alert("Error:",error);
                //   })

            }else{
                document.getElementById('errorP').textContent="we haven't enough quantity of " + element['product_name'] + ", max-count you can order is " + element['quantity'];
            }
        })
    })
    .catch(error=>{
      alert("Error:",error);
    })
    let is_ready=localStorage.getItem('is_ready');
    if(is_ready){
        fetch("addOrder.php",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({ 
                }),
            })
            .then(response=>response.json())
            .then(data=>{
            })
            .catch(error=>{
                alert("Error:",error);
              })
    }
})