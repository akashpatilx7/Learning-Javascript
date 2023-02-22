/*

Given the Listing Price & the Selling Price of a Particular Course on the LearnCodeOnline.in Website, Calculate the Percentage of Discount the user will get on that Particular Course.

*/

var listingPrice = 799;
var sellingPrice = 199;

var discount = listingPrice - sellingPrice;

var discountPercentage = (discount / listingPrice) * 100;

console.log(
  "The Discount Percentage on that Particular Course is: " + discountPercentage
);


var displayRoundedDiscountPercentage=Math.round(discountPercentage);

console.log(
  "The Rounded Discount Percentage on that Particular Course is: " + displayRoundedDiscountPercentage
);

var result = listingPrice > sellingPrice;

console.log(result);

console.log(typeof result);
// "typeof" is a keyword (rather an operator) which can be used to find the datatype of a particular variable.