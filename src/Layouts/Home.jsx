import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Cart from "../Components/Cart/Cart";
import ListProducts from "../Components/ListProducts";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import Loader from "../assets/Loader.gif";
import NF404NF from "../assets/NF404NF.gif";

const Home = ({
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    emptyCart,
    decrementQuantity10,
    incrementQuantity10,
}) => {
    const [ productos, setProductos] = useState([]);
    const [ carga, setCarga] = useState(true);
    const [ error, setError] = useState(false);
    const [ isCartOpen, setIsCartOpen ] = useState(false)

    const openCartModal = ()=>{
        setIsCartOpen(true)
    }

    const closeCartModal = () => {
        setIsCartOpen(false);
    };

    useEffect(() => {
        fetch(
            "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/productos"
        )
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setTimeout(() => {
                    setProductos(datos), setCarga(false);
                }, 500);
            })
            .catch((error) => {
                console.log("Error: ", error), setCarga(false), setError(true);
            });
    }, []);

    if (error) {
        return <img src={NF404NF} alt="Loader" />;
    }

    return (
        <>
            <Header />
            <Nav
                openCartModal={openCartModal}
            />
            <Main />

            <Cart
                cart={cart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
                decrementQuantity10={decrementQuantity10}
                incrementQuantity10={incrementQuantity10}
                isCartOpen={isCartOpen}
                closeCartModal={closeCartModal}
            />

            {carga ? (
                <img src={Loader} />
            ) : (
                <ListProducts addToCart={addToCart} productos={productos} />
            )}

            <Footer />

            {console.log(productos)}
        </>
    );
};

export default Home;
