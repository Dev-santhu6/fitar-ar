import React from "react";
import productItems from "../../data/ProductItems"
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";
// import Footer from "../../../Footer/Footer";

const ProductList = () => {
  
  return (
    <section className="productlist">
    <div className="product">
    <section className="list-view">
    

      {productItems.map((item) => (
        <ModelViewer item={item} />
      ))}
     
    </section>

    </div>
    </section>
  );
};

export default ProductList;
