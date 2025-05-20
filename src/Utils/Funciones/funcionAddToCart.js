export const addToCart = (prevCart, newProduct) => {
    const existProductInCart = prevCart.find(
        (product) => product.id === newProduct.id
    );

    if (existProductInCart) {
        return prevCart.map((product) =>
            product.id === newProduct.id
                ? {
                      ...product,
                      quantity: product.quantity + 1,
                      subtotal: (product.quantity + 1) * product.price,
                  }
                : product
        );
    } else {
        return [
            ...prevCart,
            {
                ...newProduct,
                quantity: 1,
                subtotal: newProduct.price,
            },
        ];
    }
};
