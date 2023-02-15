import { useState } from "react";
import "./popup.css";

const Popup = ({ Add }) => {
  const [popup, setPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [deascription, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleOpenPopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      <div className="new-product">
        <button onClick={handleOpenPopup}>New Product</button>
      </div>

      {popup && (
        <div className="popup">
          <button className="close" onClick={handleOpenPopup}>
            Close
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Add(title, deascription, price, quantity, content);
              handleOpenPopup();
            }}
          >
            <input
              placeholder="Title"
              type="text"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
            <br></br>
            <input
              placeholder="Description"
              type="text"
              name="deascription"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
            <br></br>
            <input
              placeholder="Price"
              type="number"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
            <br></br>
            <input
              placeholder="Quantity"
              type="number"
              name="quantity"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              required
            />
            <br></br>
            <textarea
              placeholder="Content"
              name="content"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              required
            />
            <br></br>
            <div className="add">
              <button>Add</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Popup;
