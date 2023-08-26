function getProduct() {
    fetch('admin/admin/fetch_product.php', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        // body: JSON.stringify(" hello"),
    })
    .then(r => r.json())
    .then(function(data) {
        console.log(data);
      
    })
}
getProduct();