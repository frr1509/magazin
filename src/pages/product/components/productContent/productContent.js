import styled from "styled-components";
import {
    Button,
    Count,
    ErrorCount,
    H2,
    Icon,
    NavigateRow,
} from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
    selectBuyerId,
    selectCounterErrorFlag,
    selectNewCounter,
    selectUserLogin,
} from "../../../../selectors";
import { useServerRequest } from "../../../../hooks";
import { addProductOnUserBasketAsync } from "../../../../actions";

const ProductContentContainer = ({
    className,
    product: { imageUrl, name, count, price, id },
}) => {
    const erroCounterFlag = useSelector(selectCounterErrorFlag);
    const counter = useSelector(selectNewCounter);
    const userId = useSelector(selectBuyerId);
    const userLogin = useSelector(selectUserLogin);
    const requestServer = useServerRequest();
    const dispatch = useDispatch();
    const addProductOnBasket = () => {
        dispatch(
            addProductOnUserBasketAsync(
                requestServer,
                counter,
                userLogin,
                userId,
                imageUrl,
                name,
                count,
                price,
                id,
            ),
        );
    };
    return (
        <div className={className}>
            <NavigateRow />
            <div className="product-nav"></div>
            <div className="product">
                <div className="product-image">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="product-info">
                    <H2>{name}</H2>
                    <div>
                        <Count count={count} />
                        <div className="product-price">
                            Цена: {price}{" "}
                            <Icon id="fa-rub" size="15px" margin="0 0 0 3px" />
                        </div>
                        <div className="product-button">
                            <Button
                                display="flex"
                                color="#fff"
                                onClick={addProductOnBasket}
                            >
                                {<Icon id="fa-cart-plus" margin="0 10px 0 0" />}
                                В корзину
                            </Button>
                        </div>
                    </div>
                    <div>{id}</div>
                </div>
            </div>
            <ErrorCount count={count} errorCountFlag={erroCounterFlag} />
        </div>
    );
};

export const ProductContent = styled(ProductContentContainer)`
    & .product {
        display: flex;
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(60, 75, 100, 0.07);
        padding: 32px;
        max-width: 900px;
        margin: 40px auto 48px auto;
        gap: 40px;
        align-items: flex-start;
    }

    & .product-image img {
        width: 320px;
        height: 400px;
        object-fit: cover;
        border-radius: 14px;
        background: #e0e3eb;
        box-shadow: 0 2px 8px rgba(60, 75, 100, 0.04);
    }

    & .product-image img:empty::before {
        content: "No Image Available";
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        width: 320px;
        height: 400px;
        font-size: 1.2rem;
        color: #888;
        background-color: #ddd;
        text-align: center;
    }

    & .product-info {
        text-align: center;
    }

    & .product-info H2 {
        margin: 0 0 18px 0;
        font-size: 2.2rem;
        font-weight: 700;
        color: rgb(0, 0, 0);
    }

    & .product-price {
        margin: 22px 0;
        font-size: 1.3rem;
        color: rgb(0, 0, 0);
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    & .product-button Button:hover {
        background: linear-gradient(90deg, #2851c6 0%, #3366ff 100%);
        box-shadow: 0 4px 16px rgba(51, 102, 255, 0.13);
    }

    & Button {
        align-items: center;
    }
`;
