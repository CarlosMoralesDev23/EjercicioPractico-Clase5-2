import "./App.css";
import Home from "./Layouts/Home.jsx";
import { useState } from "react";


function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (newProduct) => {
        const existProductInCart = cart.find(
            (product) => product.id === newProduct.id
        );

        if (existProductInCart) {
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
        } else {
            setCart([
                ...cart,
                {
                    ...newProduct,
                    quantity: 1,
                    subtotal: newProduct.price,
                },
            ]);
        }
    };

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
                addToCart={addToCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
            />
        </>
    );
}

export default App;
