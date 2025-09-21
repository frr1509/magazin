import styled from "styled-components";
import { ProductContent } from "./components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../hooks";
import { useParams } from "react-router-dom";
import { loadProductAsync } from "../../actions";
import { selectProduct } from "../../selectors";

const ProductContainer = ({ className }) => {
    const product = useSelector(selectProduct);
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const params = useParams();
    useEffect(() => {
        dispatch(loadProductAsync(requestServer, params.id));
    }, [dispatch, params.id, requestServer]);

    return (
        <div className={className}>
            <ProductContent product={product} />
        </div>
    );
};

export const Product = styled(ProductContainer)``;
