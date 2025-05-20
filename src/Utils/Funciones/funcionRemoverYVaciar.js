

export const removeProduct = (prevCart, inCartProduct) => {
    return prevCart.filter((product) =>
        product.id !== inCartProduct.id ? { ...product } : null
    );
};

export const emptyCart = () => {
    return [];
};



// const removeProduct = (inCartProduct) => {
//     const upDateCart = cart.filter((product) =>
//         product.id !== inCartProduct.id ? { ...product } : null
//     );
//     setCart(upDateCart);
// };

// const emptyCart = () => {
//     setCart([]);
// };