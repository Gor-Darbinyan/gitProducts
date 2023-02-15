import { useState } from "react";
import "./product-item.css";
const EditProduct = ({ Title, Quantity, Price, Description, Content, products, setProducts, product, setEditPopup}) => {
  const [title, setTitle] = useState(Title);
  const [description, setDescription] = useState(Description);
  const [price, setPrice] = useState(Price);
  const [content, setContent] = useState(Content);
  const [quantity, setQuantity] = useState(Quantity);

  const edit = () => {
    const newProducts = products.map((item) => {
      if (item.id == product.id) {
        return {
          ...item,
          Title: title,
          Description: description,
          Price: price,
          Quantity: quantity,
          Content: content,
        };
      }
      return item;
    })

    setProducts(newProducts);
    setEditPopup(false);
  };

  return (
    <div className="edit-popup">
      <button className="btn-close" onClick={()=>setEditPopup(false)}>Close</button>
          <input
        type="text"
        defaultValue={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    
      <br></br>
      <input
        type="text"
        defaultValue={Description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br></br>
      <input
        type="number"
        defaultValue={Price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br></br>
      <input
        type="number"
        defaultValue={Quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <br></br>
      <textarea
        defaultValue={Content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <br></br>
      <button onClick={edit}>Confirm</button>
    </div>
  );
};

export default EditProduct;
