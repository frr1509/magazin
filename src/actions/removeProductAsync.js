import { setProductsData } from "./setProductsData";

export const removeProductAsync = (requestServer, id) => (dispatch) => {
    requestServer("removeProduct", id).then((productData) => {
        console.log(productData.res);
        dispatch(setProductsData(productData.res));
    });
};
