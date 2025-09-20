import { Route, Routes } from "react-router-dom";
import { Content, Header, Modal } from "./components";
import {
    AdminPanel,
    Authorization,
    Basket,
    Main,
    Product,
    Registration,
} from "./pages";
import { useLayoutEffect } from "react";
import { setUser } from "./actions";
import { useDispatch } from "react-redux";

export const App = () => {
    const disapatch = useDispatch();
    useLayoutEffect(() => {
        const currentUserDataJSON = sessionStorage.getItem("userData");

        if (!currentUserDataJSON) {
            return;
        }

        const currentUserData = JSON.parse(currentUserDataJSON);

        disapatch(
            setUser({
                ...currentUserData,
                roleId: Number(currentUserData.roleId),
            }),
        );
    }, [disapatch]);
    return (
        <>
            <Header />
            <Content padding="100px 0" display="flex" jc="center">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Authorization />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/catalog" element={<div>Каталог</div>} />
                </Routes>
                <Modal />
            </Content>
        </>
    );
};
