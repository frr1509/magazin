import { getProducts } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const fetchProducts = async (hash) => {
    // const accessRoles = [ROLE.ADMIN, ROLE.GUEST, ROLE.MODERATOR, ROLE.READER];
    // const access = sessions.access(hash, accessRoles);

    // if (!access) {
    //     return {
    //         error: "Доступ запрещен",
    //         res: null,
    //     };
    // }
    const products = await getProducts();

    return {
        error: null,
        res: products,
    };
};
