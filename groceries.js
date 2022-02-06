	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic:false,
		price: 1.99
	},
	{
		name: "onion",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 2.99
	},
	{
		name: "carrot",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 0.99
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 5.99
	},
	{
		name: "orange",
		vegetarian: true,
		glutenFree: true,
		organic:false,
		price: 3.99
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic:false,
		price: 1.99
	},
	{
		name: "potato",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 3
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 2.35
	},
	{
		name: "corn",
		vegetarian: true,
		glutenFree: false,
		organic:true,
		price: 6.00
	},
	{
		name: "chocolate cake",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 15.00
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 1.99
	},
	{
		name: "ice cream",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 6.99
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: false,
		organic:false,
		price: 5.00
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic:true,
		price: 10.00
	},
	{
		name: "tuna",
		vegetarian: false,
		glutenFree: true,
		organic:true,
		price: 12.00
	},
	{
		name: "Veggie Burger Patty",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 7.99
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic:true,
		price: 9.00
	},
	{
		name: "pork",
		vegetarian: false,
		glutenFree: true,
		organic:false,
		price: 8.00
	},
	{
		name: "egg",
		vegetarian: true,
		glutenFree: true,
		organic:true,
		price: 5.00
	},



];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "VegetarianO") && (prods[i].vegetarian == true)&& (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "VegetarianN") && (prods[i].vegetarian == true)&& (prods[i].organic == false)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFreeO") && (prods[i].glutenFree == true)&& (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFreeN") && (prods[i].glutenFree == true)&& (prods[i].organic != true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "BothO") && (prods[i].vegetarian == true)&& (prods[i].glutenFree == true)&& (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "BothN") && (prods[i].vegetarian == true)&& (prods[i].glutenFree == true)&& (prods[i].organic != true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "NoneO" && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "NoneN" && (prods[i].organic != true)){
			product_names.push(prods[i]);
		}
	}
	product_names.sort(function(a, b) {
		return a.price - b.price;
	  });
	return product_names;
}
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
var result= restrictListProducts(products,"VegetarianO");
console.log(result);
