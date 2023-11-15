
    // const nft_logo=document.querySelector(".main-header>.logo");
    // var emailInput=document.querySelector('.subcribe-form input');
    // const subscribeBtn=document.querySelector('.subcribe-form button');


    // nft_logo.addEventListener('click', () => {
    //     window.location.href = '../home-page/index.html'; 
    // });



    // function checkEmail(email) {
    //     // Regular expression for basic email validation
    //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // }


    // subscribeBtn.addEventListener('click',()=>{
    //     var emailValue=emailInput.value;
    // })

    const marketplaceElement=document.querySelector('.main-nav>ul>li:first-child');
    const rankingsElement=document.querySelector('.main-nav>ul>li:nth-child(2)');
    const signUpBtn=document.querySelector('.main-nav>ul>li:nth-child(4)');
    const createAccountBtn = document.querySelector('#create-account-btn');
    const viewRankingsBtn=document.querySelector(".Top-creators button");
    const subscribeBtnWidget=document.querySelector(".subscribe-widget-container #subscribe-button");
    const subcribeBtnFooter=document.querySelector(".subscribe-footer form button");
    const inputEmailWidget=document.querySelector(".subscribe-widget-container input");



    // subscribeBtnWidget.addEventListener("click",(e)=>{
    //     e.preventDefault();
    //     console.log("clickedf");
    // })

    // subcribeBtnFooter.addEventListener("click",(e)=>{
    //     e.preventDefault();

    //     console.log("demeli");
    // })



    subscribeBtnWidget.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('clicked');

        const email = inputEmailWidget.value;



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


        const isEmailValid = checkEmail(email);

        if (isEmailValid ) {
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
            style: {
                backgroundColor: "green",  // Corrected syntax
            },
        }).showToast();
    }
    












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