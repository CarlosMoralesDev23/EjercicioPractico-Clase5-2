import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";

import { addToCart } from "./Utils/Funciones/funcionAddToCart.js";
import { incrementQuantity, incrementQuantity10 } from "./Utils/Funciones/funcionIncrementQuantity.js";
import { decrementQuantity, decrementQuantity10 } from "./Utils/Funciones/funcionDecrementQuantity.js";

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

    const handleDecrementQuantity = (newProduct)=>{
        setCart( prevCart => decrementQuantity(prevCart, newProduct))
    }

    const handleDecrementQuantity10 = (newProduct)=>{
        setCart( prevCart => decrementQuantity10(prevCart, newProduct))
    }




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
                decrementQuantity={handleDecrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
                decrementQuantity10={handleDecrementQuantity10}
                incrementQuantity10={handleIncrementQuantity10}
            />
        </>
    );
}

export default App;
