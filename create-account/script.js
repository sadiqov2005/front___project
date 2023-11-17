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
const subscribeFooterBtn = document.querySelector('.subscribe-footer form button');
const subscribeFooterInput=document.querySelector('.subscribe-footer input');







subscribeFooterBtn.addEventListener('click', (e) => {
e.preventDefault();
console.log("click");

const emailFooter = subscribeFooterInput.value;

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    if (isValid) {
        console.log("email is valid");
    } else {
        console.log("email is INVALID");
    }
    return isValid;
}

const isEmailValidFooter = checkEmail(emailFooter);

if (isEmailValidFooter) {
    showToast("Success! Form is valid.", "linear-gradient(to right, #00b09b, #96c93d)");
} else {
    showToast("Invalid input. Please check your details.", "linear-gradient(to right, #e74c3c, #c0392b)");
}
});



function showToast(message, background) {
Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
        background: background,
    },
    onClick: function () {} 
}).showToast();
}




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
        a = username.length >= 4;
        if (a) {
            console.log("Username is valid");
        } else {
            console.log("Username is INVALID");
        }
        return a;
    }

    function checkEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        b = emailRegex.test(email);
        if (b) {
            console.log("email is valid");
        } else {
            console.log("email is INVALID");
        }
        return b;
    }

    function checkPassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        c = passwordRegex.test(password);
        if (c) {
            console.log("pass is valid");
        } else {
            console.log("pass is INVALID");
        }
        return c;
    }

    const isUsernameValid = checkUsername(username);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);

    if (isUsernameValid && isEmailValid && isPasswordValid && password === confirmPassword) {
        showToast("Success! Form is valid.", "linear-gradient(to right,#2ecc71, #27ae60)");
    } else {
        showToast("Invalid input. Please check your details.");
    }
});

function showToast(message, background) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        close: true,
        style: {
            background: background,
        },
    }).showToast();
}



