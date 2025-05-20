import React, { Fragment } from "react";
import "../../Styles/CartStyles/Cart.css";
import ImageAndName from "./ImageAndName";
import Quantity from "./Quantity";
import SubtotalAndDeletProduct from "./SubtotalAndDeletProduct";
import Total from "./Total";
import EmptyCart from "./EmptyCart";

const Cart = ({
    cart,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    emptyCart,
    decrementQuantity10,
    incrementQuantity10,
    closeCartModal, // Prop para cerrar el modal
    isCartOpen, // Prop para controlar la visibilidad del modal
}) => {
    return (
        // Contenedor principal del modal (superposición y fondo oscuro)
        <div className={`cart-modal ${isCartOpen ? "open" : ""}`}>
            {/* Contenido visible del carrito dentro del modal */}
            <div className="cartContainer">
                <div className="cartTitle">
                    <h2>Cart</h2>
                    <button
                        onClick={closeCartModal}
                        className="close-modal-button"
                    >
                        X
                    </button>{" "}
                    {/* Botón para cerrar el modal */}
                </div>

                {cart.length === 0 && <p>No hay productos agregados</p>}

                {cart.map((product) => (
                    <div key={product.id} className="cartItem">
                        <ImageAndName product={product} />

                        <h3>${product.price}</h3>

                        <Quantity
                            product={product}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                            decrementQuantity10={decrementQuantity10}
                            incrementQuantity10={incrementQuantity10}
                            removeProduct={removeProduct}
                        />

                        <SubtotalAndDeletProduct
                            product={product}
                            cart={cart}
                            removeProduct={removeProduct}
                        />
                    </div>
                ))}

                {cart.length > 0 && (
                    <Fragment>
                        <Total cart={cart} />
                        <EmptyCart emptyCart={emptyCart} />
                    </Fragment>
                )}
            </div>
        </div>
    );
};

export default Cart;
