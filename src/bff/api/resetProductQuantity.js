export const resetProductQuantity = (newQuantity, id, userId) =>
    fetch(`http://localhost:3005/basket/${id}?user_id=${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            quantity: newQuantity,
        }),
    });
