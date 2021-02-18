const coffee1 = {
  customer_name: "Sarvdeep Singh",
  type_of_drink: "latte",
  size_of_coffee: "short",
  drizzle: "yes",
  whipped_cream: "no",
  sweetener: "yes",
  cold_foam: "no",
  dairy: "2% milk",
    display: function(){
	var details = "Customer Name : " + this.customer_name + "\nType of Drink : " + this.type_of_drink + "\nSize of Drink : " + this.size_of_coffee;
    if(this.drizzle == "yes")
    {
		details += "\nAdded Drizzle";
    }
	if(this.whipped_cream == "yes")
    {
		details += "\nAdded Whipped Cream";
    }
	if(this.sweetener == "yes")
    {
		details += "\nAdded Sweetener";
    }
	if(this.cold_foam == "yes")
    {
		details += "\nAdded Cold Foam";
    }
	
	details = details + "\nDairy : " + this.dairy;
	alert(details);
  } 
};
coffee1.display();

// Friend Coffee
const coffee2 = {
  customer_name: "Preet Kamal",
  type_of_drink: "Coffee",
  size_of_coffee: "tall",
  drizzle: "no",
  whipped_cream: "yes",
  sweetener: "yes",
  cold_foam: "yes",
  dairy: "almond milk",
    display: function(){
	var details = "Customer Name : " + this.customer_name + "\nType of Drink : " + this.type_of_drink + "\nSize of Drink : " + this.size_of_coffee;
    if(this.drizzle == "yes")
    {
		details += "\nAdded Drizzle";
    }
	if(this.whipped_cream == "yes")
    {
		details += "\nAdded Whipped Cream";
    }
	if(this.sweetener == "yes")
    {
		details += "\nAdded Sweetener";
    }
	if(this.cold_foam == "yes")
    {
		details += "\nAdded Cold Foam";
    }
	
	details = details + "\nDairy : " + this.dairy;
	alert(details);
  } 
};

coffee2.display();