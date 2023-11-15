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