let selectCategory=document.getElementById('categorySelect');

selectCategory.addEventListener('change',function(){
    localStorage.setItem('category_id',selectCategory.value);
    window.location.href=("./category.html");
})

