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
    // document.getElementById("div").textContent=data[1]['product_id'];
    data.map(element=>{
        let item = document.createElement('tr');
        let product_id = document.createElement('td');
        let product_photo = document.createElement('td');
        let photo=document.createElement('img');
        let product_name = document.createElement('td');
        let product_count = document.createElement('td');
        let countP=document.createElement('p');
        let add_one=document.createElement('span');
        let count=document.createElement('span');
        let sub_one=document.createElement('span');
        let delete_item=document.createElement('span');
        let product_price = document.createElement('td');


        product_id.textContent=element['product_id'];
        photo.setAttribute('src',element['photo']);
        photo.setAttribute('alt',"photo");
        photo.style.height='50px';
        product_photo.appendChild(photo);
        product_name.textContent=element['product_name'];
        add_one.innerHTML='<i class="fa-solid fa-plus"></i>&nbsp;';
        add_one.setAttribute('onclick',"addOneCount("+element['product_id']+ " ," +element['conte']+")");
        // localStorage.setItem('count',element['conte']);
        // localStorage.setItem('product_id',element['product_id']);
        count.textContent=element['conte'];
        sub_one.innerHTML='&nbsp;<i class="fa-solid fa-minus"></i>&nbsp; &nbsp; ';
        sub_one.setAttribute('onclick',"subOneCount("+element['product_id']+ " ," +element['conte']+")");
        delete_item.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        delete_item.setAttribute('onclick',"deleteItem("+element['product_id']+")")
        countP.appendChild(add_one);
        countP.appendChild(count);
        countP.appendChild(sub_one);
        countP.appendChild(delete_item);
        product_count.appendChild(countP);
        product_price.textContent=element['price']*element['conte'];

        product_id.style.display='none';


        item.appendChild(product_id);
        item.appendChild(product_photo);
        item.appendChild(product_name);
        item.appendChild(product_count);
        item.appendChild(product_price);
        
        // item.style.display='flex';
        // item.style.justifyContent='space-between';
        document.getElementById("table").appendChild(item);
        total+=element['price']*element['conte'];
        document.getElementById('totalPrice').textContent="Total Price: \n " + total + " JOD";

        
    })
})
.catch(error=>{
    alert("Error:",error);
})

function addOneCount(id,count) {
    fetch("changeCount.php",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            product_id:id,
            count:count+1,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        // console.log(data['message']);
        window.location.href=("./cart.html");

    })
    
}

function subOneCount(id,count) {
    if(count-1>0){
        fetch("changeCount.php",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                product_id:id,
                count:count-1,
        }),
        })
        .then(response=>response.json())
        .then(data=>{
            // console.log(data['message']);
            window.location.href=("./cart.html");
        })
    }else{
        
    }
    
}

function deleteItem(id){
    fetch("deleteProductCart.php",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            product_id:id,
            edit:1,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data['message']);
        window.location.href=("./cart.html");
    })
}
document.getElementById("deleteCartBtn").addEventListener("click",function(){
    document.getElementById('deleteDiv').style.display='block';
    document.getElementById("deleteCartBtn").style.display='none';
})
document.getElementById('noBtn').addEventListener('click',function(){
    document.getElementById('deleteDiv').style.display='none';
    document.getElementById("deleteCartBtn").style.display='inline';
})
document.getElementById('yesBtn').addEventListener('click', function(){
    fetch("deleteProductCart.php",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            edit:2,
    }),
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data['message']);
        window.location.href=("./cart.html");
    })
})

document.getElementById("chkbtn").addEventListener('click',function(){
    window.location.href=('./payment.html');
})