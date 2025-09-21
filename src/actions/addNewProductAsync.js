import { setProductsData } from "./setProductsData";

export const addNewProductAsync = (requestServer, data) => (dispatch) => {
    requestServer("addNewProduct", data).then((productsData) => {
        dispatch(setProductsData(productsData.res));
    });
};
