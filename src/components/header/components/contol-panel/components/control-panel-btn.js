import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../../icon/icon";

const ControlPanelBtnContainer = ({
    className,
    icon,
    children,
    way,
    totalProduct,
}) => {
    return (
        <Link className={className} to={`${way}`}>
            <Icon id={`${icon}`} size="20px" />
            <div className="text">{children}</div>
            {children === "Корзина" ? (
                <div className="product-quantity">{totalProduct}</div>
            ) : null}
        </Link>
    );
};

export const ControlPanelBtn = styled(ControlPanelBtnContainer)`
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    margin: ${({ margin = "10px" }) => margin};
    text-align: center;
    & > div {
        margin: 10px 0 0 0;
    }
    & .product-quantity {
        position: fixed;
        top: 9px;
        right: 120px;
        background-color: #fff;
        color: #1e2869;
        border-radius: 48%;
        width: 19px;
        height: 19px;
        font-size: 11px;
        font-weight: 700;
        display: ${({ totalProduct }) =>
            totalProduct === 0 || totalProduct === null ? "none" : "block"};
    }
    & .text {
        font-size: 15px;
    }
`;
