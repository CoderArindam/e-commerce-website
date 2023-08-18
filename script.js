let menuBarElement = document.querySelector('.bar-icon');

let navBarElement = document.getElementById('nav-bar-ul');

let crossElement = document.querySelector('.cross');

menuBarElement.addEventListener('click',() =>{
navBarElement.style.right = '0px';
})

crossElement.addEventListener('click', () =>{
  navBarElement.style.right = '-300px'
})

let mainImageElement = document.querySelector('.main-image');
let altImageElements = document.querySelectorAll('.alt-image');

altImageElements.forEach((altImageElement) => {
  altImageElement.addEventListener('click', () => {
    mainImageElement.src = altImageElement.src;
  });
});


function redirectToSingleProductPage(){
  window.location.href ='single-product.html'
}
let cardElement = document.querySelectorAll('.card');

cardElement.forEach((eachCard)=>{
eachCard.addEventListener('click',()=>{
  redirectToSingleProductPage();
})
})