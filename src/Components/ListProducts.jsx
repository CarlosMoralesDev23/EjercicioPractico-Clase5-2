import React from "react";

import "../Styles/ListProducts.css";
import Product from "./Product";


const ListProducts = ({ addToCart, productos }) => {
    return (
        <div className="containProducts">
            {productos.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default ListProducts;
