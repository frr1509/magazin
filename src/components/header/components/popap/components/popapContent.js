import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useServerRequest } from "../../../../../hooks";
import { loadCategorysAsync, loadProductsAsync } from "../../../../../actions";
import { selectCategorys, selectProducts } from "../../../../../selectors";
import { Link } from "react-router-dom";

const PopapContentContainer = ({ className, setOpen }) => {
    const products = useSelector(selectProducts);
    const category = useSelector(selectCategorys);
    const dispatch = useDispatch();
    const requestServer = useServerRequest();

    useEffect(() => {
        dispatch(loadProductsAsync(requestServer));
        dispatch(loadCategorysAsync(requestServer));
    }, [dispatch, requestServer]);

    return (
        <div className={className} onClick={(e) => e.stopPropagation()}>
            {category.map(({ id, name }) => (
                <Link
                    key={id}
                    to={`/catalog/${name}`}
                    onClick={() => setOpen(false)}
                    className="category-link-container"
                >
                    {name}
                </Link>
            ))}
        </div>
    );
};

export const PopapContent = styled(PopapContentContainer)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: #fff;
    padding: 20px;
    width: 300px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    display: flex;
    flex-direction: column;

    & .category-link-container {
        border-radius: 8px;
        margin: 0 -12px;
        padding: 7px 12px 9px 48px;
        color: #5c5c5cff;
    }

    & .category-link-container:hover {
        background-color: #f6f6f9;
        color: #000000ff;
        font-weight: 550;
    }
`;
