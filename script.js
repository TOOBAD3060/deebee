// const dark = document.querySelector('.dark-mode')
// // var content = document.getElementsByTagName('body')[0];
// dark.addEventListener('click',() =>{
//     document.body.classList.toggle('active')
// })
//  const first = document.querySelector('.first-man')
//  const second = document.querySelector('.second-man')
//  second.addEventListener('click',()=>{
//     first.classList.toggle('active')
//  })
//  const light = document.querySelector('.light-man')
// // var content = document.getElementsByTagName('body')[0];
// light.addEventListener('click',() =>{
//     document.body.classList.toggle('active')
// })

let wallets = document.querySelector(".wallet-link").children;
const modalContainer = document.querySelector(".modal-bg");
let modal = document.getElementsByClassName("modal");
let errorMsg = document.querySelector(".errBg");
let walletBtn = document.querySelector("#nav-wallet");

// to display the modal
walletBtn.addEventListener("click", () => {
  modalContainer.classList.add("active");
//   alert("You clicked me")
});

// loop through the wallet and add listener
for (let i = 0; i < wallets.length; i++) {
  wallets[i].onclick = function () {
    let old = this.innerHTML;
    this.innerHTML = "<div class='loader'></div>";

    setTimeout(() => {
      errorMsg.classList.add("active");
      this.innerHTML = old;
    }, 2000);
  };
}

let closeBtn = document.querySelector(".close");

closeBtn.onclick = function () {
  modalContainer.classList.remove("active");
};
  
let closeErrBtn = document.querySelector(".set .close");

closeErrBtn.onclick = function () {
  errorMsg.classList.remove("active");
  // modalContainer.classList.remove('active');
};
onmo
