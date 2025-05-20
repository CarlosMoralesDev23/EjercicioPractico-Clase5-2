import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";

import { addToCart } from "./Utils/Funciones/funcionesInProduct/funcionAddToCart.js";
import { incrementQuantity, incrementQuantity10 } from "./Utils/Funciones/funcionesInCart/funcionIncrementQuantity.js";
import { decrementQuantity, decrementQuantity10 } from "./Utils/Funciones/funcionesInCart/funcionDecrementQuantity.js";
import { removeProduct, emptyCart } from "./Utils/Funciones/funcionesInCart/funcionRemoverYVaciar.js";

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
    const handleRemoveProduct = (inCartProduct) => {
        setCart((prevCart) => removeProduct(prevCart, inCartProduct));
    };
    const handleEmptyCart = ()=>{
        setCart( emptyCart )
    }

    return (
        <>
            <Home
                cart={cart}
                addToCart={handleAddToCart}
                incrementQuantity={handleIncrementQuantity}
                decrementQuantity={handleDecrementQuantity}
                removeProduct={handleRemoveProduct}
                emptyCart={handleEmptyCart}
                decrementQuantity10={handleDecrementQuantity10}
                incrementQuantity10={handleIncrementQuantity10}
            />
        </>
    );
}

export default App;
