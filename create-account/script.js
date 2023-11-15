const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const marketplaceElement=document.querySelector('.main-nav>ul>li:first-child');
const rankingsElement=document.querySelector('.main-nav>ul>li:nth-child(2)');
const signUpBtn=document.querySelector('.main-nav>ul>li:nth-child(4)');
const createAccountBtn = document.querySelector('#create-account-btn');
const formCreateAccount = document.getElementById('form-create-account');
const logoNFT=document.querySelector('.main-header > .logo');




function openHomePage(){
    logoNFT.addEventListener("click",()=>{
        console.log("clickeddd");
        window.location.href="../home-page/index.html"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    openHomePage();
});



function openRankings(){
    rankingsElement.addEventListener("click",()=>{
        console.log("clickeddd");
        window.location.href="../rankings-page/index.html"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    openRankings();
});

function openHomePage(){
    logoNFT.addEventListener("click",()=>{
        console.log("clickeddd");
        window.location.href="../home-page/index.html"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    openHomePage();
});

function openMarketplace(){
    marketplaceElement.addEventListener("click",()=>{
        window.location.href="../marketplace-page/index.html"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    openMarketplace();
});





createAccountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');

    const username = inputUsername.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    const confirmPassword = inputConfirmPassword.value;

    function checkUsername(username) {
        a= username.length >= 4
        if (a==true){
            console.log("Username is valid");
        }
        else {
            console.log("Username is INVALID");
        }
        return a;
    }

    function checkEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        b = emailRegex.test(email)
        if (b==true){
            console.log("email is valid");
        }
        else {
            console.log("email is INVALID");
        }
        return b;
    }

    function checkPassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        c= passwordRegex.test(password)
        if (c==true){
            console.log("pass is valid");
        }
        else {
            console.log("pass is INVALID");
        }
        return c;
    }

    const isUsernameValid = checkUsername(username);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);

    if (isUsernameValid && isEmailValid && isPasswordValid && password === confirmPassword) {
        showToast("Success! Form is valid.");
    } else {
        showToast("Invalid input. Please check your details.");
    }
});

function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,  
        gravity: "top", 
        close: true,    
        backgroundColor: "RED", 
    }).showToast();
}



