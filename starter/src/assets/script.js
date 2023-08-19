<<<<<<< HEAD
/* Create an array named products which you will use to add all of your product object
literals that you create in the next step. */
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
/* Create an array named products which you will use to add all
  of your product object literals that you create in the next
  step. */
=======
<<<<<<< HEAD
/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
>>>>>>> aced26e04dd7c107898eea015ccf9f07a861c448
let products = []
<<<<<<< HEAD

||||||| merged common ancestors
||||||||| c4c0fc1
/* Create an array named products which you will use to add all
  of your product object literals that you create in the next
  step. */
const products = []
=========
/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = []
>>>>>>>>> Temporary merge branch 2
=======
||||||| c4c0fc1
/* Create an array named products which you will use to add all
  of your product object literals that you create in the next
  step. */
const products = []
=======
/* Create an array named products which you will use to add all
  of your product object literals that you create in the next
  step. */
let products = []
>>>>>>> d9a96e9387f303af6701fcba1c81081896466757
>>>>>>> aced26e04dd7c107898eea015ccf9f07a861c448
/* Create 3 or more product objects using object literal notation
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const cherry = {
  name: "Cherry",
  price: 23,
  quantity: 0,
  productId: 0,
  image: "../images/cherry.jpg"

}

const orange = {
  name: "Orange",
  price: 25,
  quantity: 0,
  productId: 1,
  image: "/images/orange.jpg"

}

const strawberry = {
  name: "Strawberry",
  price: 15,
  quantity: 0,
  productId: 2,
  image: "/images/strawberry.jpg"

}

const vhsTape = {
  name: "Blank VHS Tape",
  price: 2,
  quantity: 0,
  productId:3,
  image:"/images/vhstape.jpg"
}


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
products.push(cherry, orange, strawberry, vhsTape);
/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  const product = products.find(item => item.productId === productId);
  if (product) {
    product.quantity++;
    const cartItem = cart.find(cartItem => cartItem.productId === productId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      const newItem = { ...product };
      cart.push(newItem);
    }
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const product = products.find(item => item.productId === productId);
  if (product) {
    product.quantity++;
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
      cartItem.quantity++;
 }
}
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const product = products.find(item => item.productId === productId);
  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      const index = products.indexOf(product);
      if (index >= 0) {
        products.splice(index, 1);
      }
    }
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        const index = cart.indexOf(cartItem);
        if (index >= 0) {
          cart.splice(index, 1);
        }
      }
    }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  const item = cart.find(item => item.productId === productId);
  if (item) {
    const index = cart.indexOf(item);
  if (index >= 0) {
    cart.splice(index,1);
  }
  }
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  return total

}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  if (cart.length > 0) {
    cart = []
  }
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount){
  const remainingBalance = amount - cartTotal();
  if (remainingBalance < 0){
    return remainingBalance;
  } else {
    return amount - cartTotal();
  }
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests.
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay,
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
