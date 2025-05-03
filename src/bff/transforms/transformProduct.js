export const transformProduct = (dbProduct) => ({
    id: dbProduct.id,
    name: dbProduct.name,
    price: dbProduct.price,
    imageUrl: dbProduct.image_url,
    category: dbProduct.category,
    count: dbProduct.count,
    publishedAt: dbProduct.published_at,
});
