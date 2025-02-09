import { Route, Routes } from "react-router-dom";
import { Content, Header } from "./components";
import { Authorization, Registration } from "./pages";

export const App = () => {
    return (
        <>
            <Header />
            <Content padding="100px 0" display="flex" jc="center">
                <Routes>
                    <Route path="/" element={<div>Главная</div>} />
                    <Route path="/login" element={<Authorization />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/basket" element={<div>Корзина</div>} />
                    <Route path="/catalog" element={<div>Каталог</div>} />
                </Routes>
            </Content>
        </>
    );
};
