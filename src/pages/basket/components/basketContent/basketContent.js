import styled from "styled-components";
import { Count, Icon } from "../../../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    closeModal,
    deleteProductFromBasketAsync,
    openModal,
} from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { selectBuyerId, selectUserLogin } from "../../../../selectors";

const BasketContentContainer = ({ className, userBasket }) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const userId = useSelector(selectBuyerId);
    const userLogin = useSelector(selectUserLogin);
    const deleteProductFromBasket = (id, quantity) => {
        dispatch(
            openModal({
                text: "Удалить товар из корзины?",
                onConfirm: () => {
                    dispatch(
                        deleteProductFromBasketAsync(
                            requestServer,
                            quantity,
                            id,
                            userLogin,
                            userId,
                        ),
                    );
                    dispatch(closeModal);
                },
                onCancel: () => dispatch(closeModal),
            }),
        );
    };

    return (
        <div className={className}>
            <div className="conteiner">
                {userBasket.map(
                    ({ quantity, name, price, count, id, imageUrl }) => (
                        <div key={id} className="product-container">
                            <div className="product-cart">
                                <div className="product-info">
                                    <div className="product-img">
                                        <Link to={`/product/${id}`}>
                                            <img src={imageUrl} alt={""} />
                                        </Link>
                                    </div>
                                    <div className="name">
                                        <span>Артикул: {id}</span>
                                        <Link to={`/product/${id}`}>
                                            {name}
                                        </Link>
                                    </div>
                                </div>
                                <div className="product-price-con">
                                    <Icon
                                        onClick={() =>
                                            deleteProductFromBasket(
                                                id,
                                                quantity,
                                            )
                                        }
                                        id="fa-times"
                                        margin="0 10px 0 0"
                                        size="18px"
                                        color=" #c5c4c4;"
                                        colorHover="#000"
                                    />
                                    <div className="product-price-counter">
                                        <div className="product-price">
                                            {price}
                                            <Icon
                                                id="fa-rub"
                                                size="15px"
                                                margin="0 0 0 3px"
                                                color="#000"
                                            />
                                        </div>
                                        <Count
                                            quantity={quantity}
                                            count={count}
                                            id={id}
                                        />
                                        <div className="product-price">
                                            {price * quantity}
                                            <Icon
                                                id="fa-rub"
                                                size="15px"
                                                margin="0 0 0 3px"
                                                color="#000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};

export const BasketContent = styled(BasketContentContainer)`
    font-family: "FontAwesome";
    & .conteiner {
        margin: 0 0 20px 0;
    }
    & .product-container {
        padding: 30px 0;
        box-shadow: 0 0 0 1px rgba(26, 26, 26, 0.06);
        margin: 0 0 10px 0;
    }
    & .product-cart {
        display: flex;
        justify-content: space-around;
    }
    & .product-cart > a {
        color: #000;
    }
    & .product-info {
        display: flex;
    }
    & .product-price-counter {
        display: flex;
        align-items: center;
        font-weight: bold;
        box-shadow: inset 0 0 0 1px rgba(26, 26, 26, 0.1);
        padding: 50px 0;
    }
    & .product-price-con {
        display: flex;
        align-items: center;
    }
    & .product-price-con > i {
        color: azure;
    }
    & .product-price {
        display: flex;
        align-items: center;
        width: 50px;
        margin: 0 40px;
        font-size: 18px;
    }
    & .product-img > a > img {
        height: 164px;
        width: 164px;
        margin: 0 15px 0 0;
        background-color: #c5c4c4;
        object-fit: cover;
        border: 1px solid #000000;
    }

    & .name {
        width: 250px;
        color: #c5c4c4;
    }

    & .name > a {
        color: #c5c4c4;
        display: block;
        font-size: 25px;
    }

    & .name > a:hover {
        color: #000;
        transition: color 0.2s;
        text-decoration: underline;
    }

    & .name > span {
        font-size: 15px;
    }
`;
