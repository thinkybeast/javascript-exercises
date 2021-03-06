// We make a few purchases to prepare for our study session, but the amount charged upon checkout seems too high. Run the following code and find out why we are charged incorrectly.

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
var shoppingCart = [];

// Currently available products with prices.
var prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price(item) {
  return prices[item.name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount = 1) { // fix: assign default amount in parameters
  // amount = amount || 1; // breaks with value 0

  var i;
  var item;
  var alreadyInCart = false;

  for (i = 0; i < shoppingCart.length; i += 1) {
    item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name: name, amount: amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  var total = 0;
  var i;

  for (i = 0; i < shoppingCart.length; i += 1) {
    var item = shoppingCart[i];

    total += (item.amount * price(item));
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log('You have been charged $' + total() + '.');
}

function checkout() {
  pay();
  shoppingCart = {};
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0); // this line will fail, as value 0 gets updated to value 1

checkout();
// You have been charged $14.69.