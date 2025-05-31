import { setCategorysData } from "./setCategorysData";

export const loadCategorysAsync = (requestServer) => (dispatch) => {
    requestServer("loadCategorys").then((categorysData) => {
        dispatch(setCategorysData(categorysData.res));
    });
};
