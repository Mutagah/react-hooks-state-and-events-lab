import React,{useState} from "react";

function Item({ name, category }) {
  const [itemInCart , addingToCart] = useState(false)
  function handlingClick(){
    addingToCart(()=> !itemInCart )
    console.log(itemInCart)
  }
  return (
    <li className={itemInCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlingClick}>{itemInCart? "Remove from Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
