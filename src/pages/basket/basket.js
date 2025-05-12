import styled from "styled-components";
import {ErrorCount, H2, Navigate } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectBuyerId,
    selectCounterErrorFlag,
    selectUserBasket,
    selectUserLogin,
} from "../../selectors";
import { useServerRequest } from "../../hooks";
import { loadProductFromBasketAsync } from "../../actions";
import { BasketContent, BasketDelete, BasketTotalSum } from "./components";

const CartBasket = ({ className }) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const userId = useSelector(selectBuyerId);
    const userLogin = useSelector(selectUserLogin);
    const userBasket = useSelector(selectUserBasket);
    const errorCountFlag = useSelector(selectCounterErrorFlag);
    const { count, price } = userBasket;
    useEffect(() => {
        dispatch(loadProductFromBasketAsync(requestServer, userLogin, userId));
    }, [dispatch, requestServer, userId, userLogin]);
    return (
        <div className={className}>
            <div className="basket-top">
                <Navigate />
                <div className="basket-delete">
                    <H2 margin="0 0 0 0">Корзина</H2>
                    <BasketDelete userLogin={userLogin} userId={userId}>
                        Очистить корзину
                    </BasketDelete>
                </div>
            </div>
            <ErrorCount
                count={count}
                price={price}
                errorCountFlag={errorCountFlag}
            />
            <BasketContent userBasket={userBasket} />
            <BasketTotalSum userBasket={userBasket} />
        </div>
    );
};

export const Basket = styled(CartBasket)`
    width: 100%;
    padding: 0 30px;

    & .basket-top {
        margin: 0 0 30px 0;
    }
    & .basket-delete {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0 0 0;
    }
`;
