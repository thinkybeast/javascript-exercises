// A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out various percentage discounts but are getting unexpected results. Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results.

var item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    var discount = this.price * percent / 100;
    // this.price -= discount;  This line causes the error
    var discountPrice = this.price - discount;

    console.log(discountPrice);
  },
};
 item.discount(20)   // should return 40
// = 40
 item.discount(50)   // should return 25
// = 20
 item.discount(25)   // should return 37.5
// = 15

/*
The error is caused because the discount method assigns a new value to the object's price property. Thus, every time the method is run, the discount is made on the most recent value, not the original value (50)
*/