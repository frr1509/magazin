import { transformBasket } from "../transforms";

export const getBasket = async (userId) =>
    fetch(`http://localhost:3005/basket?user_id=${userId}`)
        .then((loadedBasket) => loadedBasket.json())
        .then(
            (loadedBasket) => loadedBasket && loadedBasket.map(transformBasket),
        );
