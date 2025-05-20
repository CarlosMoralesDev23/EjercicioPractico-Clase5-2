

export const decrementQuantity = (prevCart, newProduct) => {
    return prevCart.map((product) =>
        product.id === newProduct.id
            ? {
                  ...product,
                  quantity: product.quantity - 1,
                  subtotal: (product.quantity - 1) * product.price,
              }
            : product
    );
};

export const decrementQuantity10 = (prevCart, newProduct) => {
    return prevCart.map((product) =>
        product.id === newProduct.id
            ? {
                  ...product,
                  quantity: product.quantity - 10,
                  subtotal: (product.quantity - 10) * product.price,
              }
            : product
    );
};






// const decrementQuantity = (newProduct) => {
//     const upDateCart = cart.map((product) =>
//         product.id === newProduct.id
//             ? {
//                   ...product,
//                   quantity: product.quantity - 1,
//                   subtotal: (product.quantity - 1) * product.price,
//               }
//             : product
//     );
//     setCart(upDateCart);
// };

// const decrementQuantity10 = (newProduct) => {
//     const upDateCart = cart.map((product) =>
//         product.id === newProduct.id
//             ? {
//                   ...product,
//                   quantity: product.quantity - 10,
//                   subtotal: (product.quantity - 10) * product.price,
//               }
//             : product
//     );
//     setCart(upDateCart);
// };