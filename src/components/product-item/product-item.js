import "./product-item.css";
import { useState } from "react";
import DeleteProduct from "./delete-popup";
import EditProduct from "./edit-popup";


const ProductItem = ({Title,Description,Price,Quantity,Content,onDelete,product,products, setProducts}) => {
  const [open, setOpen] = useState(false);
  const [openEditPopup, setEditPopup] = useState(false)


  return (
    <div className="product-item">
      <input type="text" value={Title} />
      <br></br>
      <input type="text" value={Description} />
      <br></br>
      <input type="number" value={Price} />
      <br></br>
      <input type="number" value={Quantity} />
      <br></br>
      <textarea value={Content} />
      <br></br>
      <div>
      <button onClick={()=> setEditPopup(true)}>Edit</button>
      <button onClick={() => setOpen(true)}>Delete</button>
      </div>
   
      {open && <DeleteProduct product={product} onDelete={onDelete} setOpen={setOpen}/>}
      {openEditPopup && <EditProduct  setEditPopup={setEditPopup} product={product} setProducts={setProducts} products={products} Title={Title} Description={Description} Price={Price} Content={Content} Quantity={Quantity}/>}
    </div>
  );
};

export default ProductItem;
