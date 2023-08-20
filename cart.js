document.addEventListener('DOMContentLoaded', function () {
  const cartTableBody = document.querySelector('.table-body');
  const grandTotalElement = document.querySelector('.grand-total');

  let grandTotal = 0;
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Function to remove cart item from local storage and update grand total
  function removeCartItemAndUpdateTotal(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    localStorage.setItem('cart', JSON.stringify(cartItems));
    const subtotal = parseFloat(removedItem.price) * parseInt(removedItem.quantity);
    grandTotal -= subtotal;
    grandTotalElement.textContent = `Grand Total: ${grandTotal} Rs.`;
  }

  // Handle click on the cross button using event delegation
  cartTableBody.addEventListener('click', function (event) {
    const crossButton = event.target.closest('.cross-btn');
    if (crossButton) {
      const indexToRemove = crossButton.getAttribute('data-index');
      if (indexToRemove !== null) {
        removeCartItemAndUpdateTotal(indexToRemove);

        // Remove the row from the table visually
        const rowToRemove = crossButton.closest('tr');
        if (rowToRemove) {
          rowToRemove.remove();
        }
      }
    }
  });

  // Populate the cart table and calculate grand total
  cartItems.forEach((item, index) => {
    const newRow = document.createElement('tr');
    const subtotal = parseFloat(item.price) * parseInt(item.quantity);
    newRow.innerHTML = `
      <td><button class="cross-btn" data-index="${index}"><i class="fa-regular fa-circle-xmark"></i></button></td>
      <td><img src="${item.image}" alt=""></td>
      <td>${item.title}</td>
      <td>${item.size}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${subtotal} Rs.</td>`;
    cartTableBody.appendChild(newRow);
    grandTotal += subtotal;
  });

  grandTotalElement.textContent = `Grand Total: ${grandTotal} Rs.`;
});

