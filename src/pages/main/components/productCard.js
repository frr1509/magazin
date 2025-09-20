import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCardContainer = ({ className, id, name, price, imageUrl }) => {
    return (
        <Link to={`/product/${id}`} className={className}>
            <div className="product-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="product-info">
                <div className="product-price">{price} ₽</div>
                <h3>{name}</h3>
            </div>
        </Link>
    );
};

export const ProductCard = styled(ProductCardContainer)`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(60, 75, 100, 0.07);
    padding: 16px;
    margin: 20px;
    width: calc(20% - 10px);

    &:hover {
        transform: scale(1.05);
        transition:
            transform 0.5s,
            box-shadow 0.5s;
    }

    & .product-image {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 14px;
        background: #e0e3eb;
        box-shadow: 0 2px 8px rgba(60, 75, 100, 0.04);
    }

    & .product-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & .product-image img:empty::before {
        content: "No Image Available";
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        height: 100%;
        font-size: 1.2rem;
        color: #888;
        background-color: #ddd;
        text-align: center;
    }

    & .product-info {
        flex: none;
        margin-top: auto;
    }

    & .product-info h3 {
        color: #d4d4d4;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.3s;
    }

    & .product-price {
        margin: 8px 0;
        font-size: 1rem;
        color: rgb(0, 0, 0);
        font-weight: bold;
    }

    & button {
        background: #2448b6;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s;
        font-size: 0.9rem;
    }

    & button:hover {
        background: #1e3a8a;
    }
`;
