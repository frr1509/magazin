export const resetProduct = (name, price, count, image, category, id) =>
    fetch(`http://localhost:3005/products/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            name: name,
            price: price,
            image_url: image,
            category: category,
            count: count,
        }),
    });
