var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
 // can add items to the cart
 
    var cartContents = { 
    itemName: item,
    itemPrice: Math.floor(Math.random() * Math.floor(100))
    };
    
  getCart().push(cartContents);
  return cartContents.itemName + " has been added to your cart.";

}




function viewCart() {
  // write your code here
 
  
const cartLength = getCart().length;


  
  if (cartLength === 0) {
   return "Your shopping cart is empty.";
   }
  
const statement = [];


  for (let i = 0; i < cartLength; i++) {
    
  const statementDefault = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}`  ;

    if (i === 0 && cartLength === 1) {
     return `${statementDefault}` +`.`;
      
    } else if (i === 1 && cartLength === 2) {
      const statement02 = ` ${getCart()[1].itemName} at $${getCart()[1].itemPrice}`;
      return `${statementDefault}`+`, and`+`${statement02}` +`.`;
      }
    
      else if (i === 1 && cartLength === 3) {
      const statement03 = `${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and`+` ${getCart()[2].itemName} at $${getCart()[2].itemPrice}`;
      return `${statementDefault}`+`, `+`${statement03}` +`.`;
      }
   }  
  }







function total() {
  // adds up the price of all items in the cart
 
    var cartTotal = 0
    
    for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice 
    }
    
    return cartTotal
}



function removeFromCart(item) {
  // write your code here


   for (let i = 0; i<cart.length; i++) {
      
      
      if  (cart[i].itemName === item ) {
        
        return 
        
      }
      
      else {
        
        cart.itemName = false ;
        return "That item is not in your cart." ;
        
      }

   }

}



function placeOrder(cardNumber) {
  // write your code here
  
  
describe("placeOrder()", function() {
  it("doesn't place the order if a credit card number is not provided", function() {
    
    expect(placeOrder()).toEqual("Sorry, we don't have a credit card on file for you.");
  });

  it("places an order when a credit card number is provided", function() {
    addToCart("zucchini");

    const cartTotal = total();
    const cardNumber =  
  
}
