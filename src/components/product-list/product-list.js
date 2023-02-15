import React, { useState } from "react";
import ProductItem from "../product-item/product-item";
import "./product-list.css";

const ProductList = ({ products, onDelete,setProducts }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="form-search">
        <form>
          <input
            placeholder="Search product"
            type="search"
            name="search"
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div className="products">
        {products
          .filter((product) => {
            return value.toLocaleLowerCase() === ""
              ? product
              : product.Title.toLowerCase().includes(value);
          })
          .map((product) => {
            return (
              <ProductItem
                setProducts={setProducts}
                products={products}
                product={product}
                onDelete={onDelete}
                key={product.id}
                Title={product.Title}
                Description={product.Description}
                Content={product.Content}
                Price={product.Price}
                Quantity={product.Quantity}
                
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
