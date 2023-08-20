fetch("cartView.php",{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
}),
})
.then(response=>response.json())
.then(data=>{
    document.getElementById("div").textContent=data[1]['product_id'];
})
.catch(error=>{
    alert("Error:",error);
})