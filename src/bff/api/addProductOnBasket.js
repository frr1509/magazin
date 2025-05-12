export const addProductOnBasket = (
    counter,
    userId,
    imageUrl,
    name,
    count,
    price,
    id,
) =>
    fetch("http://localhost:3005/basket", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json;charset=utf-8",
        },
        body: JSON.stringify({
            quantity: counter,
            user_id: userId,
            image_url: imageUrl,
            name: name,
            count: count,
            price: price,
            id: id,
        }),
    });
