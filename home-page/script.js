


    const marketplaceElement=document.querySelector('.main-nav>ul>li:first-child');
    const rankingsElement=document.querySelector('.main-nav>ul>li:nth-child(2)');
    const signUpBtn=document.querySelector('.main-nav>ul>li:nth-child(4)');
    const createAccountBtn = document.querySelector('#create-account-btn');
    const viewRankingsBtn=document.querySelector(".Top-creators button");
    const subscribeBtnWidget=document.querySelector(".subscribe-widget-container #subscribe-button");
    const subcribeBtnFooter=document.querySelector(".subscribe-footer form button");
    const inputEmailWidget=document.getElementById("inputEmailWidget");
    const getStartedBtn=document.querySelector(".left-columnInHeroFrame>.row3>button");
    const subscribeFooterBtn = document.querySelector('.subscribe-footer form button');
    const subscribeFooterInput=document.querySelector('.subscribe-footer input');


   // validations

   

   subscribeBtnWidget.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');

    const email = inputEmailWidget.value;

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

    const isEmailValid = checkEmail(email);

    if (isEmailValid) {
        showToast("Success! Form is valid.", "linear-gradient(to right, #00b09b, #96c93d)");
    } else {
        showToast("Invalid input. Please check your details.", "linear-gradient(to right, #e74c3c, #c0392b)");
    }
});

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

    








    
    
    // go to another page of NFT

function openMarketplace(){
    marketplaceElement.addEventListener("click",()=>{
        window.location.href="../marketplace-page/index.html"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    openMarketplace();
});

function openSignCreateAccounPage(){
    signUpBtn.addEventListener("click",()=>{
        window.location.href="../create-account/index.html"
    })
    getStartedBtn.addEventListener("click",()=>{
        window.location.href="../create-account/index.html"
    })
}
document.addEventListener("DOMContentLoaded", () => {
    openSignCreateAccounPage();
});

function openRankings(){
    rankingsElement.addEventListener("click",()=>{
        console.log("clickeddd");
        window.location.href="../rankings-page/index.html"
    })
    viewRankingsBtn.addEventListener("click",()=>{
        console.log("clickeddd");
        window.location.href="../rankings-page/index.html"
    })
}


document.addEventListener("DOMContentLoaded", () => {
    openRankings();
});