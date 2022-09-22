
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

const buttons = document.querySelectorAll('btn solid');
buttons.forEach(btn=>{
  btn.addEventListener('click',function(e){
    let x =e.clientX - e.target.offsetLeft;
    let Y =e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x+ 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples); 

    setTimeout(()=>{
       ripples.remove()


    },1000);
  })

})
/* faire attention avec querySelectorall et querySelector */
let titles =document.querySelector(".title")

window.setInterval(function(){
  titles.classList.toggle("colors")
},2000)

/* titles */

let p2 = document.querySelector(".titles")
window.setInterval(function(){
  p2.classList.toggle("colors2")
},2000)