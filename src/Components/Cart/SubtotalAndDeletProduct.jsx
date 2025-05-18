import React from "react";
import "../../Styles/CartStyles/SubtotalAndDeletProduct.css";
import Basura from "../../assets/basura.png";


const SubtotalAndDeletProduct = ( { product, cart, removeProduct  } ) => {
    return (
        <div className="SubtotalAndDeletProduct">
            <span>SubTotal: ${product.subtotal}</span>

            <button onClick={() => removeProduct(product)}>
                <img src={Basura}/>
            </button>
        </div>
    );
};

export default SubtotalAndDeletProduct;





