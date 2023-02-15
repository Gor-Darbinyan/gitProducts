import "./App.css";
import nextId from "react-id-generator";
import ProductList from "./components/product-list/product-list";
import Popup from "./components/popup-new-product/popup";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: nextId(),
      Title: "BRAVE LION",
      Description:
        "Кроссовки кожаные мужские кеды ",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 8000,
      Quantity: 9,
    },
    {
      id: nextId(),
      Title: "Reebok",
      Description:
        "Кроссовки кожаные мужские кеды ",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 13000,
      Quantity: 1,
    },
    {
      id: nextId(),
      Title: "Ravetti",
      Description:
        "Кроссовки кожаные мужские кеды",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 15000,
      Quantity: 3,
    },
    {
      id: nextId(),
      Title: "Nike",
      Description:
        "Кроссовки кожаные мужские кеды",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 7800,
      Quantity: 5,
    },
    {
      id: nextId(),
      Title: "Addidas",
      Description:
        "Кроссовки кожаные мужские кеды",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 11000,
      Quantity: 8,
    },
    {
      id: nextId(),
      Title: "BRAVE LION",
      Description:
        "Кроссовки кожаные мужские кеды ",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 12000,
      Quantity: 0,
    },
    {
      id: nextId(),
      Title: "BRAVE LION",
      Description:
        "Кроссовки кожаные мужские кеды ",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 13000,
      Quantity: 10,
    },
    {
      id: nextId(),
      Title: "BRAVE LION",
      Description:
        "Кроссовки кожаные мужские кеды ",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 25000,
      Quantity: 7,
    },
    {
      id: nextId(),
      Title: "BRAVE LION",
      Description:
        "Кроссовки кожаные мужские кеды ",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 13500,
      Quantity: 2,
    },
    {
      id: nextId(),
      Title: "BRAVE LION",
      Description:
        "Кроссовки кожаные мужские кеды полуботинки спортивный стиль",
      Content:
        "Мужские кроссовки натуральная кожа. Из натуральной кожи сделан верх, подкладка и стелька обуви.",
      Price: 5000,
      Quantity: 1,
    },
  ]);


  return (
    <div className="App">
      <Popup
        Add={(Title, Description, Price, Quantity, Content) => {
          setProducts([
            ...products,
            {
              id: nextId(),
              Title: Title,
              Description: Description,
              Content: Content,
              Price: Price,
              Quantity: Quantity,
            },
          ]);
        }}
      />
      <ProductList
      setProducts={setProducts}
        products={products}
        onDelete={(product) => {
          setProducts(products.filter((item) => item.id !== product.id));
        }}
      />
    </div>
  );
}

export default App;
