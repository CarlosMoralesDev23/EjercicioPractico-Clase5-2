import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Cart from "../Components/Cart/Cart";
import ListProducts from "../Components/ListProducts";
import Footer from "../Components/Footer";
import { products } from "../Utils/data.js";
import { useState, useEffect } from "react";
import Loader from "../assets/Loader.gif";
import NF404NF from "../assets/NF404NF.gif"

const Home = ({
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    emptyCart,
}) => {
    const [productos, setProductos] = useState([]);
    const [carga, setCarga] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(
            "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/productos"
        )
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos), setCarga(false);
                console.log(datos);
            })
            .catch((error) => {
                console.log("Error: ", error), setCarga(false), setError(true);
            });
    }, []);

    if(error){
        return <img src={NF404NF} alt="Loader" />;

    }

    return (
        <>
            <Header />
            <Nav />
            <Main />

            <Cart
                cart={cart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
            />

            {carga ? (
                <img src={Loader} alt="Loader" />
            ) : (
                <ListProducts addToCart={addToCart} products={productos} />
            )}

            <Footer />
        </>
    );
};

export default Home;
