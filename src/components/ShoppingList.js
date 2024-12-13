import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) { //I need the below to check if selected category matches item.category
  const [selectedCategory, setSelectedCategory] = useState("All")
  // const xx = selectedCategory
  const handleChange = (event) =>{displayGroceryList(event.target.value)}

  const displayGroceryList = (value) => {  
    /* console.log(value)
    console.log(items)
    console.log(newSelectedCategory) */
    setSelectedCategory(value)
  }
  function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }
  const filteredItemsArr = items.filter(item => selectedCategory === "All" ? true : item.category === selectedCategory) 


  return (
    <div className="ShoppingList" >
      <div className="Filter" >
        <select name="filter" onChange={handleChange}>  
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItemsArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
