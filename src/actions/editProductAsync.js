import { setProductsData } from "./setProductsData";

export const editProductAsync = (requestServer, data, id) => (dispatch) => {
    requestServer("editProduct", data, id).then((productData) => {
        dispatch(setProductsData(productData.res));
    });
};
