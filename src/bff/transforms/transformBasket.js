export const transformBasket = (dbBasket) => ({
    quantity: dbBasket.quantity,
    userId: dbBasket.user_id,
    name: dbBasket.name,
    count: dbBasket.count,
    price: dbBasket.price,
    id: dbBasket.id,
    imageUrl: dbBasket.image_url,
});
