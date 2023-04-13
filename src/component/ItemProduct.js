import React, { useState } from "react";
import { ListProduct } from "./ListProduct";
import "../index.css";

function ItemProduct() {
    const [coutProduct, setcoutProduct] = useState(0)
    
  const handleMinu =(item,index) =>{
    setcoutProduct(coutProduct-1)
  }
  const handlePlusst =(item,index)=>{
    console.log(item,index)
    setcoutProduct(coutProduct+1)

  }
  return (
    <div>
      <div className="head-Product">
        <p className="title-Product">To Spend</p>
      </div>
      <div className="wp-Card">
        {ListProduct.map((item, index) => {
          return (
            <div className="wp-CartItem">
              <div className="img-product-wp">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-product"
                />
              </div>
              <div className="wp-price">
                <span className="price-title">{item.title}</span>
                <span className="price-title">{item.price}</span>
              </div>
              <div className="wpBtn">
                <button className=" btn-CoutPlus" onClick={()=>handleMinu()}>Interrest</button>
               <span>{coutProduct}</span>
                <button className="  btn-Cout" onClick={()=>handlePlusst()}>Add</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemProduct;
