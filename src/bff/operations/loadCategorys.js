import { getCategorys } from "../api";

export const loadCategorys = async (hash) => {
    const categorys = await getCategorys();

    return {
        error: null,
        res: categorys,
    };
};
