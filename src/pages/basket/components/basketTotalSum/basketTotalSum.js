import styled from "styled-components";
import { Button, Icon } from "../../../../components";

const BaskettotalSumContainer = ({ className, userBasket }) => {
    const totalSum = userBasket.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
    );
    return (
        <div className={className}>
            <div>
                <div className="total-sum">
                    <div className="total-sum-text">Итого:</div>
                    <div className="total-sum-price">
                        {totalSum}
                        <Icon
                            id="fa-rub"
                            size="15px"
                            margin="0 0 0 3px"
                            color="#000"
                        />
                    </div>
                </div>
                <Button color="#fff">Офромить заказ</Button>
            </div>
        </div>
    );
};

export const BasketTotalSum = styled(BaskettotalSumContainer)`
    display: flex;
    justify-content: flex-end;

    & .total-sum-price {
        display: flex;
        align-items: center;
    }
    & .total-sum {
        font-weight: 600;
        font-size: 20px;
        display: flex;
        width: 520px;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        padding: 15px 0;
        margin: 0 0 20px 0;
    }
`;
