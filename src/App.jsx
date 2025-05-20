import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";

import { addToCart } from "./Utils/Funciones/funcionAddToCart.js";
import { incrementQuantity, incrementQuantity10 } from "./Utils/Funciones/funcionIncrementQuantity.js";

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (newProduct)=>{
        setCart(prevCart => addToCart(prevCart, newProduct))
    }

    const handleIncrementQuantity = (newProduct)=>{
        setCart(prevCart => incrementQuantity(prevCart, newProduct))
    }

    const handleIncrementQuantity10 = (newProduct)=>{
        setCart(prevCart => incrementQuantity10(prevCart, newProduct))
    }


    const decrementQuantity = (newProduct) => {
        const upDateCart = cart.map((product) =>
            product.id === newProduct.id
                ? {
                        ...product,
                        quantity: product.quantity - 1,
                      subtotal: (product.quantity - 1) * product.price,
                    }
                : product
        );
        setCart(upDateCart);
    };

    const decrementQuantity10 = (newProduct) => {
        const upDateCart = cart.map((product) =>
            product.id === newProduct.id
                ? {
                      ...product,
                      quantity: product.quantity - 10,
                      subtotal: (product.quantity - 10) * product.price,
                  }
                : product
        );
        setCart(upDateCart);
    };

    const removeProduct = (inCartProduct) => {
        const upDateCart = cart.filter((product) =>
            product.id !== inCartProduct.id ? { ...product } : null
        );
        setCart(upDateCart);
    };

    const emptyCart = () => {
        setCart([]);
    };

    return (
        <>
            <Home
                cart={cart}
                addToCart={handleAddToCart}
                incrementQuantity={handleIncrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
                decrementQuantity10={decrementQuantity10}
                incrementQuantity10={handleIncrementQuantity10}
            />
        </>
    );
}

export default App;
