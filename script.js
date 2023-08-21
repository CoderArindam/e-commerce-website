let menuBarElement = document.querySelector('.bar-icon');

let navBarElement = document.getElementById('nav-bar-ul');

let crossElement = document.querySelector('.cross');

menuBarElement.addEventListener('click', () => {
  navBarElement.style.right = '0px';
})

crossElement.addEventListener('click', () => {
  navBarElement.style.right = '-300px'
})
// CODE FOR SINGLE PRODUCT PAGE

const mainImageElement = document.querySelector('.main-image');
const altImageElements = document.querySelectorAll('.alt-image');
altImageElements.forEach((altImageElement) => {
  altImageElement.addEventListener('click', () => {
    mainImageElement.src = altImageElement.src;
  });
});


function redirectToSingleProductPage() {
  window.location.href = 'single-product.html'
}
let cardElement = document.querySelectorAll('.card');

cardElement.forEach((eachCard) => {
  eachCard.addEventListener('click', () => {
    redirectToSingleProductPage();
  })
})
const addToCartBtn = document.querySelector('.add-to-cart');
function changeCartButton() {

  if (addToCartBtn.innerText === 'ADDED') {
    addToCartBtn.innerText = 'ADD TO CART';
    addToCartBtn.classList.remove('add-to-cart-btn');

  }
  else {
    addToCartBtn.classList.add('add-to-cart-btn')
    addToCartBtn.innerText = 'ADDED'
  }
}

addToCartBtn.addEventListener('click', () => {
  changeCartButton()
})

// Setting up the cart section

document.addEventListener('DOMContentLoaded', function () {
  const addToCartbtnElement = document.querySelector('.add-to-cart');

  addToCartbtnElement.addEventListener('click', () => {
    addingProductsToCart();
  });


  function addingProductsToCart() {
    const mainImageElement = document.querySelector('.main-image');
    const titleElement = document.querySelector('.single-product-details h4').innerText;
    const sizeElement = document.querySelector('#sizeSelect').value;
    console.log(sizeElement)
    const priceElement = document.querySelector('.single-product-details h2').innerText;
    const quantityElement = document.querySelector('.cart-quantity').value;

    const cartItem = {
      image: mainImageElement.src,
      title: titleElement,
      size: sizeElement,
      price: priceElement,
      quantity: quantityElement,
    };

    // Retrieve existing cart items from storage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new cart item to the array
    existingCartItems.push(cartItem);

    // Store the updated cart items array back in local storage
    localStorage.setItem('cart', JSON.stringify(existingCartItems));
  }
});
