import React from "react";
import "../../Styles/CartStyles/Quantity.css";

const Quantity = ({
    product,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    decrementQuantity10,
    incrementQuantity10,
}) => {
    return (
        <div className="botonesMenosYMas">
            <button
                onClick={() => {
                    if (product.quantity >= 11) {
                        decrementQuantity10(product);
                    } else if (product.quantity === 10) {
                        removeProduct(product);
                    }
                }}
                disabled={product.quantity < 10}
            >
                -10
            </button>

            <button
                onClick={
                    product.quantity === 1
                        ? () => removeProduct(product)
                        : () => decrementQuantity(product)
                }
            >
                -
            </button>

            <div className="cantidadYDisponible">
                <span>Cantidad: {product.quantity}</span>
                <span>Disponible: {product.stock}</span>
            </div>

            <button onClick={() => incrementQuantity(product)}>+</button>

            <button
                onClick={() => {
                    if (product.quantity + 10 <= product.stock) {
                        incrementQuantity10(product);
                    }
                }}
                disabled={product.quantity + 10 > product.stock}
            >
                +10
            </button>
        </div>
    );
};

export default Quantity;
