import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";

import { addToCart } from "./Utils/Funciones/funcionAddToCart.js";

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (newProduct)=>{
        setCart(prevCart => addToCart(prevCart, newProduct))
    }

    // const addToCart = (newProduct) => {
    //     const existProductInCart = cart.find(
    //         (product) => product.id === newProduct.id
    //     );

    //     if (existProductInCart) {
    //         const upDateCart = cart.map((product) =>
    //             product.id === newProduct.id
    //                 ? {
    //                       ...product,
    //                       quantity: product.quantity + 1,
    //                       subtotal: (product.quantity + 1) * product.price,
    //                   }
    //                 : product
    //         );
    //         setCart(upDateCart);
    //     } else {
    //         setCart([
    //             ...cart,
    //             {
    //                 ...newProduct,
    //                 quantity: 1,
    //                 subtotal: newProduct.price,
    //             },
    //         ]);
    //     }
    // };

    const incrementQuantity = (newProduct) => {
        const upDateCart = cart.map((product) =>
            product.id === newProduct.id
                ? {
                      ...product,
                      quantity: product.quantity + 1,
                      subtotal: (product.quantity + 1) * product.price,
                  }
                : product
        );
        setCart(upDateCart);
    };

    const incrementQuantity10 = (newProduct) => {
        const upDateCart = cart.map((product) =>
            product.id === newProduct.id
                ? {
                      ...product,
                      quantity: product.quantity + 10,
                      subtotal: (product.quantity + 10) * product.price,
                  }
                : product
        );
        setCart(upDateCart);
    };

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
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
                decrementQuantity10={decrementQuantity10}
                incrementQuantity10={incrementQuantity10}
            />
        </>
    );
}

export default App;
