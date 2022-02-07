
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var pic = document.createElement("img");
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name;
		console.log(productName.name);
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName.name;
		label.appendChild(document.createTextNode(productName.name+":$"+productName.price));
		if(productName.name=="brocoli")
		{
			pic.src = "picture/brocoli.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="onion")
		{
			pic.src="picture/onion.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="carrot")
		{
			pic.src="picture/carrot.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="apple")
		{
			pic.src="picture/apple.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="orange")
		{
			pic.src="picture/orange.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="tomato")
		{
			pic.src="picture/tomato.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="potato")
		{
			pic.src="picture/potato.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="bread")
		{
			pic.src="picture/bread.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="corn")
		{
			pic.src="picture/corn.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="chocolate cake")
		{
			pic.src="picture/chocolate cake.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="milk")
		{
			pic.src="picture/milk.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="ice cream")
		{
			pic.src="picture/ice cream.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="cheese")
		{
			pic.src="picture/cheese.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="salmon")
		{
			pic.src="picture/salmon.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="tuna")
		{
			pic.src="picture/tuna.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="Veggie Burger Patty")
		{
			pic.src="picture/Veggie Burger Patty.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="beef")
		{
			pic.src="picture/beef.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="pork")
		{
			pic.src="picture/pork.jpg";
			pic.height=100;
			pic.width=100;
		}
		else if(productName.name=="egg")
		{
			pic.src="picture/egg.jpg";
			pic.height=100;
			pic.width=100;
		}
		label.appendChild(document.createElement("br"));
		label.appendChild(pic);
		s2.appendChild(label);
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));
		if(s2==null){
			print("no product for this option now")
		}
	}


}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price
function selectedItems(){
	
	var ele = document.getElementsByName("product");

	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}

	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
	alert("Your item had been add");
		
}
