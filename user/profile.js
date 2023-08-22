let fnamep = document.getElementById("fnamep");
let lnamep = document.getElementById("lnamep");
let emailp = document.getElementById("emailp");
let phonep = document.getElementById("phonep");
let cityp = document.getElementById("cityp");
let addressp = document.getElementById("addressp");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let oldpass=document.getElementById("oldPassword");
let newpass=document.getElementById("NewPassword");
let phone = document.getElementById("phone");
let city = document.getElementById("city");
let address = document.getElementById("address");

let fnamebtn = document.getElementById("fnamebtn");
let lnamebtn = document.getElementById("lnamebtn");
let emailbtn = document.getElementById("emailbtn");
let passwordBtn=document.getElementById("passwordBtn");
let phonebtn = document.getElementById("phonebtn");
let citybtn = document.getElementById("citybtn");
let addressbtn = document.getElementById("addressBtn");

let fnamecancel = document.getElementById("fnamecancel");
let lnamecancel = document.getElementById("lnamecancel");
let emailcancel = document.getElementById("emailcancel");
let passwordcancel=document.getElementById("passwordcancel");
let phonecancel = document.getElementById("phonecancel");
let citycancel = document.getElementById("citycancel");
let addresscancel = document.getElementById("addresscancel");


let up=0;
let lw=0;
let nm=0;
let sp=1;
let sc=0;
let lg=0;

    fetch("userData.php")
    .then(Response => Response.json())
    .then(data => {
        // console.log(data[0]);
        fnamep.textContent = data[0]['first_name'];
        lnamep.textContent = data[0]['last_name'];
        emailp.textContent = data[0]['email'];
        phonep.textContent = "0" + data[0]['phone'];
        cityp.textContent = data[0]['city'];
        addressp.textContent = data[0]['address'];
    })

    //................fname..........................//
    //................fname..........................//
    //................fname..........................//
    function editfname() {
        document.getElementById("viewfname-div").style.display = 'none';
        document.getElementById("editfname-div").style.display = 'block';
        fname.value=fnamep.textContent;
    }
    fnamebtn.addEventListener("click",function(){
        let fNameRE=/[a-zA-Z]{1,}/g;
        if(fname.value.match(fNameRE)==fname.value){
            fetch("editProfile.php",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    fname : fname.value,
                    edit : 1,
                }),
            })
            .then(Response => Response.json())
            .then(data => {
                document.getElementById("viewfname-div").style.display = 'flex';
                document.getElementById("editfname-div").style.display = 'none';
                window.location.href=("./profile.html");
            })
        }else{
            document.getElementById("fnamePValid").style.display='block';
            // document.getElementById("fnamePValid").classList.remove("valid");
            // document.getElementById("fnamePValid").classList.add("invalid");
        }
    })
    fnamecancel.addEventListener("click",function(){
        document.getElementById("viewfname-div").style.display = 'flex';
        document.getElementById("editfname-div").style.display = 'none';
    })


    //................lname..........................//
    //................lname..........................//
    //................lname..........................//
    function editlname() {
        document.getElementById("viewlname-div").style.display = 'none';
        document.getElementById("editlname-div").style.display = 'block';
        lname.value=lnamep.textContent;
    }
    lnamebtn.addEventListener("click",function(){
        let lNameRE=/[a-zA-Z]{1,}/g;
        if(lname.value.match(lNameRE)==lname.value){
            fetch("editProfile.php",{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                lname : lname.value,
                edit : 2,
            }),
            })
            .then(Response => Response.json())
            .then(data => {
                document.getElementById("viewlname-div").style.display = 'flex';
                document.getElementById("editlname-div").style.display = 'none';
                window.location.href=("./profile.html");
            })
        }else{
            document.getElementById("lnamePValid").style.display='block';
        }
    })
    lnamecancel.addEventListener("click",function(){
        document.getElementById("viewlname-div").style.display = 'flex';
        document.getElementById("editlname-div").style.display = 'none';
    })


    //................Email..........................//
    //................Email..........................//
    //................Email..........................//
    function editemail() {
        document.getElementById("viewemail-div").style.display = 'none';
        document.getElementById("editemail-div").style.display = 'block';
        email.value=emailp.textContent;
    }
    emailbtn.addEventListener("click",function(){
        let emailRE=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(email.value.match(emailRE)){
            fetch("editProfile.php",{
               method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email : email.value,
                    edit : 3,
                }),
            })
            .then(Response => Response.json())
            .then(data => {
                document.getElementById("viewemail-div").style.display = 'flex';
                document.getElementById("editemail-div").style.display = 'none';
                window.location.href=("./profile.html");
            })
        }else{
            document.getElementById("emailPValid").style.display='block';
        }
    })
    emailcancel.addEventListener("click",function(){
        document.getElementById("viewemail-div").style.display = 'flex';
        document.getElementById("editemail-div").style.display = 'none';
    })


    //................Password..........................//
    //................Password..........................//
    //................Password..........................//
    function editpassword() {
        document.getElementById("viewpassword-div").style.display = 'none';
        document.getElementById("editpassword-div").style.display = 'block';
    }
    newpass.addEventListener("focus",function(){
        // if(newpass.value.match(/([A-Z])/g)) {  
        //     up=1;
        // } else {
            //     document.getElementById("capitalPass").style.display='block';
            //     up=0;
            // }
            // if(newpass.value.match(/(?=.*[a-z])/g)) {  
                //     lw=1;
                // } else {
                    //     document.getElementById("letterPass").style.display='block';
                    //     lw=0;
                    // }
                    // if(newpass.value.match(/(?=.*\d)/g)) {
                        //     nm=1;
                        // } else {
                            //     document.getElementById("numberPass").style.display='block';
                            //     nm=0;
                            // }
                            // if(newpass.value.match(/^\S*$/)){
                                //     document.getElementById("spacePass").style.display='none';
                                //     sp=1;
                                // } else {
        //     document.getElementById("spacePass").style.display='block';
        //     spacePass.classList.add("invalid");
        //     spacePass.classList.remove("valid");
        //     sp=0;
        // }
        // if(newpass.value.match(/[!@#/?\$%\^\&*\)\(+=._-]{1,}/g)){
        //     sc=1;
        // } else {
        //     document.getElementById("spChPass").style.display='block';
        //     sc=0;
        // }      
        // if(newpass.value.length >= 8 && password.value.length<=32) {
            //     lg=1;
            // } else {
                //     document.getElementById("lengthPass").style.display='block';
                //     lg=0;
                // }
                document.getElementById("numberPass").style.display='block';
                // document.getElementById("spacePass").style.display='block';
                document.getElementById("capitalPass").style.display='block';
                document.getElementById("letterPass").style.display='block';
                document.getElementById("lengthPass").style.display='block';
                document.getElementById("spChPass").style.display='block';
            })
            newpass.addEventListener("blur",function(){
                document.getElementById("numberPass").style.display='none';
                document.getElementById("spacePass").style.display='none';
                document.getElementById("capitalPass").style.display='none';
                document.getElementById("letterPass").style.display='none';
                document.getElementById("lengthPass").style.display='none';
                document.getElementById("spChPass").style.display='none';
            })
            passwordBtn.addEventListener("click",function(event){
                event.preventDefault();
                if(newpass.value.match(/([A-Z])/g)) {  
                    up=1;
                } else {
                    document.getElementById("capitalPass").style.display='block';
                    up=0;
                }
                if(newpass.value.match(/(?=.*[a-z])/g)) {  
                    lw=1;
                } else {
                    document.getElementById("letterPass").style.display='block';
                    lw=0;
                }
                if(newpass.value.match(/(?=.*\d)/g)) {
                    nm=1;
                } else {
                    document.getElementById("numberPass").style.display='block';
                    nm=0;
                }
                if(newpass.value.match(/^\S*$/)){
                    document.getElementById("spacePass").style.display='none';
                    sp=1;
                } else {
            document.getElementById("spacePass").style.display='block';
            sp=0;
        }
        if(newpass.value.match(/[!@#/?\$%\^\&*\)\(+=._-]{1,}/g)){
            sc=1;
        } else {
            document.getElementById("spChPass").style.display='block';
            sc=0;
        }      
        if(newpass.value.length >= 8 && newpass.value.length<=32) {
            lg=1;
        } else {
            document.getElementById("lengthPass").style.display='block';
            lg=0;
        }
        if(up && lw && nm && sp && sc && lg){
            event.preventDefault();
            fetch("editProfile.php",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    oldpass : oldpass.value,
                    newpass : newpass.value,
                    edit : 4,
                }), 
            })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                if(data['message']=="error password"){
                    document.getElementById("invalid password").style.display='block';
                }else{
                    document.getElementById("viewpassword-div").style.display = 'flex';
                    document.getElementById("editpassword-div").style.display = 'none';
                    window.location.href=("./profile.html");
                }    
            })
        }
    })
    passwordcancel.addEventListener("click",function(){
        document.getElementById("viewpassword-div").style.display = 'flex';
        document.getElementById("editpassword-div").style.display = 'none';
    })


    //................Phone..........................//
    //................Phone..........................//
    //................Phone..........................//
    function editphone() {
        document.getElementById("viewphone-div").style.display = 'none';
        document.getElementById("editphone-div").style.display = 'block';
        phone.value=phonep.textContent;
    }
    phonebtn.addEventListener("click",function(){
        if(phone.value.match(/^\d{10}$/)){
            fetch("editProfile.php",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    phone : phone.value,
                    edit : 5,
                }),
            })
            .then(Response => Response.json())
            .then(data => {
                document.getElementById("viewphone-div").style.display = 'flex';
                document.getElementById("editphone-div").style.display = 'none';
                window.location.href=("./profile.html");
            })
        }else{
            document.getElementById("phonePValid").style.display='block';
        }
    })
    phonecancel.addEventListener("click",function(){
        document.getElementById("viewphone-div").style.display = 'flex';
        document.getElementById("editphone-div").style.display = 'none';
    })


    //................City..........................//
    //................City..........................//
    //................City..........................//
    function editcity(){
        document.getElementById("viewcity-div").style.display='none';
        document.getElementById("editcity-div").style.display='block';
    }
    citybtn.addEventListener("click",function(){
        if(city.value==="City"){
            document.getElementById("cityPValid").style.display='block';
        }else{
            fetch("editProfile.php",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    city : city.value,
                    edit : 6,
                }),
            })
            .then(Response => Response.json())
            .then(data => {
                document.getElementById("viewcity-div").style.display = 'flex';
                document.getElementById("editcity-div").style.display = 'none';
                window.location.href=("./profile.html");
            })
        }
    })
    citycancel.addEventListener("click",function(){
        document.getElementById("viewcity-div").style.display = 'flex';
        document.getElementById("editcity-div").style.display = 'none';
    })


    //................Address..........................//
    //................Address..........................//
    //................Address..........................//
    function editaddress(){
        document.getElementById("viewaddress-div").style.display='none';
        document.getElementById("editaddress-div").style.display='block';
        address.value=addressp.textContent;
    }
    addressbtn.addEventListener("click",function(){
        if(address.value==""){
            document.getElementById("addressPValid").style.display='block';
        }else{
            fetch("editProfile.php",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    address : address.value,
                    edit : 7,
                }),
            })
            .then(Response => Response.json())
            .then(data => {
                document.getElementById("viewaddress-div").style.display = 'flex';
                document.getElementById("editaddress-div").style.display = 'none';
                window.location.href=("./profile.html");
            })
        }
        
    })
    addresscancel.addEventListener("click",function(){
        document.getElementById("viewaddress-div").style.display = 'flex';
        document.getElementById("editaddress-div").style.display = 'none';
    })
    
    // ================ start NAVBAR==========
    // ================ start NAVBAR==========
    // ================ start NAVBAR==========
 

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
    function fetchCcategory(){
      fetch('admin/admin/cata.php' , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(" "),
    
      })
      .then(r => r.json())
      .then(function(data){
        console.log(data);
        data.forEach(function(e , index){
          categoryid.innerHTML += `
          <a href="user/category.html"><option value="${data[index].category_id}">${data[index].name}</option></a>
            
          `
        })
        
      });
    }
    fetchCcategory();

    // ================ end NAVBAR==========//
    // ================ end NAVBAR==========//
    // ================ end NAVBAR==========//
