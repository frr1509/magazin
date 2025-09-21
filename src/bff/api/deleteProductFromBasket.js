export const deleteProductFromBasket = async (id) =>
    fetch(`http://localhost:3005/basket/${id} `, {
        method: "DELETE",
    });
