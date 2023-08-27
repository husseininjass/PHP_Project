let cards = document.querySelector('.row');
function getProduct() {
    fetch('admin/admin/fetch_test.php', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(" hello"),
    })
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        data.forEach(function(e,index){
            cards.innerHTML += `
            <div class="col-md-4">
            <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                    <img class="card-img rounded-0 img-fluid" src="admin/product_images/${data[index].photo}">
                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul class="list-unstyled">
                            <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                            <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                            <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <a href="shop-single.html" class="h3 text-decoration-none">${data[index].product_name}</a>
                    <p>${data[index].description
                    }</p>
                    
                    <p class="text-center mb-0">$${data[index].price}</p>
                </div>
            </div>
        </div>
            `
        })
      
    })
}
getProduct();