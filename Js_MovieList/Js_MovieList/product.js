//objects
const bread = { name: "wheat bread", price: 15 };
const tea = { name: "chai", price: 45 };
const rice = { name: "basmati", price: 30 };
const chocolate = { name: "milka", price: 20 };

//define Cart

const cart = [];

//add products to cart function

function AddToCart() {
    cart.push(bread);
    cart.push(tea);
    cart.push(rice);
}

//add and show on console
AddToCart();
console.log(cart);


//{
//var globalVariable = "a";
//    let localVariable = "b";

//}

//console.log(globalVariable);


//total price of products inside of cart

function getCartTotalPrice() {
    let totalPrice = 0;
    for (var i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }
    console.log("Total price of your products is: " + totalPrice + " TL.");
}

getCartTotalPrice();

