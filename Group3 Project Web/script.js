


// Hamburger to make navigation responsive
const navLinks = document.getElementById("nav_links");
const open = document.getElementById("open");
navLinks.style.right = "-200px";
navLinks.style.transition = "0s";


// If this click the navlinks will close
function navclose(){
    open.style.visibility ="visible";
    navLinks.style.transition = ".5s";
    navLinks.style.right = "-200px";
    
}

// If this click the navlinks will open
function navopen(){
    open.style.visibility ="hidden";
    navLinks.style.transition = ".5s";
    navLinks.style.right = "0";
}



// automatically calculate the quantity and the price
function total(){
    var test = document.getElementById('Product').value;
    var quantity = document.getElementById('number').value;
    var result = quantity*test;
    
    document.getElementById('result').innerHTML = result;   
    document.getElementById("pricee").innerHTML = test;
}



// Open the orderdialog
function opendialog(){
    const foot = document.getElementById("main-foots");
    const mainhead = document.getElementById("main-header");
    const none1 = document.getElementById('products');
    const none2 = document.getElementById('iges');
    foot.style.filter = "blur(3px)";
    const btnorder = document.getElementById("main-button");
    mainhead.style.filter = "blur(3px)";
    none1.style.filter = "blur(3px)";
    none2.style.filter = "blur(3px)";
    const dialog = document.getElementById('ordering');
    dialog.style.transition = ".5s";
    dialog.style.zIndex = "9999999";
    dialog.style.top ="65px";
    

}
// Close the orderdialog
function closedialog(){
    let answer = prompt("Are you sure you want to Exit?\nInput (1) to Exit \nInput (2) to Stay");

    if(answer == 1){
        
        
        const none1 = document.getElementById('products');
        const none2 = document.getElementById('iges');
        const btnorder = document.getElementById("main-button");
        none1.style.filter = "blur(0px)";
        none2.style.filter = "blur(0px)";
        const dialog = document.getElementById('ordering');
        dialog.style.transition = ".5s";
        dialog.style.zIndex = "9999999";
        dialog.style.top ="-700px";
        window.location.reload();
          
        
    }else if(answer == 2){
        opendialog();
    }else{
        alert("Invalid! \nPlease Try Again");
        closedialog();

    }
    
    

}

// Message if done ordering
function thankyou(){
    var quan = document.getElementById('number').value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(quan == "" || name == "" || email == ""){
        alert("Please fill all fields");
    }else{
        alert("Thank You!!! Order Again");
    }  
}



// Validation for contacts for emppty inputs
function validation(){
    const tb1 = document.getElementById("name").value;
    const tb2 = document.getElementById("gmail").value;
    const tb3 = document.getElementById("num").value;
    const tb4 = document.getElementById("message").value;
    // const tb3 = document.getElementById('num').value;
    // const tb4 = document.getElementById('message').value;
    if(tb2 == "" || tb1 == "" || tb4 == "" || tb3== ""){
        alert("Fill out all fields");
    }else{
       document.getElementById("name").value = "";
       document.getElementById("gmail").value = "";
       document.getElementById("num").value = "";
       document.getElementById("message").value = "";
       alert("Thank you!");
    }
}




// This will change the nav bar color to maroon if we scroll the page
window.addEventListener('scroll' , () =>{
    const anim = document.getElementById("main-header");
    document.getElementById('main-header').classList.toggle('window-scroll',window.scrollY > 0);
})



        