import { generateDate } from "../utils";

export const addProduct = async ({ count, image, name, price, category }) =>
    fetch("http://localhost:3005/products", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json;charset=utf-8",
        },
        body: JSON.stringify({
            name: name,
            price: price,
            image_url: image,
            category: category,
            count: count,
            published_at: generateDate(),
        }),
    });
