import { useEffect } from "react";
import styled from "styled-components";
import { loadProductsAsync } from "../../actions";
import { useServerRequest } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../selectors";
import { ProductCard } from "./components";

const MianContainer = ({ className }) => {
    const products = useSelector(selectProducts);
    console.log(products);
    const requestServer = useServerRequest();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsAsync(requestServer));
    }, [dispatch, requestServer]);

    return (
        <div className={className}>
            {products.map(({ id, name, price, imageUrl }) => (
                <ProductCard
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    imageUrl={imageUrl}
                />
            ))}
        </div>
    );
};

export const Main = styled(MianContainer)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 20px 80px;
`;
