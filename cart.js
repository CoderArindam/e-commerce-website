document.addEventListener('DOMContentLoaded', function () {
  const cartTableBody = document.querySelector('.table-body');

  // Function to remove cart item from local storage
  function removeCartItem(index) {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    existingCartItems.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(existingCartItems)); // Update local storage
  }

  // Handle click on the cross button using event delegation
  cartTableBody.addEventListener('click', function (event) {
    const crossButton = event.target.closest('.cross-btn');
    if (crossButton) {
      const indexToRemove = crossButton.getAttribute('data-index');
      if (indexToRemove !== null) {
        removeCartItem(indexToRemove);
        // Remove the row from the table visually
        const rowToRemove = crossButton.closest('tr');
        if (rowToRemove) {
          rowToRemove.remove();
        }
      }
    }
  });

  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Populate the cart table
  cartItems.forEach((item, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td><button class="cross-btn" data-index="${index}"><i class="fa-regular fa-circle-xmark"></i></button></td>
      <td><img src="${item.image}" alt=""></td>
      <td>${item.title}</td>
      <td>${item.size}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${parseFloat(item.price) * parseInt(item.quantity)}Rs.</td>
    `;
    cartTableBody.appendChild(newRow);
  });
});
