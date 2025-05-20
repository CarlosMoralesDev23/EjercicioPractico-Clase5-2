
export const incrementQuantity = (prevCart, newProduct) => {
    return prevCart.map((product) =>
        product.id === newProduct.id
            ? {
                  ...product,
                  quantity: product.quantity + 1,
                  subtotal: (product.quantity + 1) * product.price,
              }
            : product
    );
};

export const incrementQuantity10 = (prevCart, newProduct) => {
    return prevCart.map((product) =>
        product.id === newProduct.id
            ? {
                  ...product,
                  quantity: product.quantity + 10,
                  subtotal: (product.quantity + 10) * product.price,
              }
            : product
    );
};



// export const incrementQuantity = (prevCart, newProduct) => {
//     const upDateCart = prevCart.map((product) =>
//         product.id === newProduct.id
//             ? {
//                   ...product,
//                   quantity: product.quantity + 1,
//                   subtotal: (product.quantity + 1) * product.price,
//               }
//             : product
//     );
//     setCart(upDateCart);
// };

// export const incrementQuantity10 = (prevCart, newProduct) => {
//     const upDateCart = prevCart.map((product) =>
//         product.id === newProduct.id
//             ? {
//                   ...product,
//                   quantity: product.quantity + 10,
//                   subtotal: (product.quantity + 10) * product.price,
//               }
//             : product
//     );
//     setCart(upDateCart);
// };