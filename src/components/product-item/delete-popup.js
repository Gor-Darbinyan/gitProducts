import "./product-item.css";

const DeleteProduct = ({ product, onDelete, setOpen }) => {
  return (
    <div className="popup-delete">
      <p>"Are you sure ?"</p>
      <div className="btn-delete">
        <button onClick={() => onDelete(product)}>Yes</button>
        <button onClick={() => setOpen(false)}>No</button>
      </div>
    </div>
  );
};

export default DeleteProduct;
