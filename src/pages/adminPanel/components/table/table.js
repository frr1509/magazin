import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../../components";
import { closeModal, openModal, removeProductAsync } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from "../../../../hooks";
import { TableBody, TableHead } from "./components";
import { selectProducts } from "../../../../selectors";
import { useState } from "react";

const TableContainer = ({
    className,
    id,
    name,
    price,
    imageUrl,
    category,
    count,
    onEdit,
    setEditProduct,
}) => {
    const products = useSelector(selectProducts);
    return (
        <div className={className}>
            <table>
                <TableHead />
                {products.map(
                    ({ id, name, price, imageUrl, category, count }) => (
                        <TableBody
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            imageUrl={imageUrl}
                            category={category}
                            count={count}
                            onEdit={() => {
                                setEditProduct({
                                    id,
                                    name,
                                    price,
                                    count,
                                    category,
                                    imageUrl,
                                });
                            }}
                        />
                    ),
                )}
            </table>
        </div>
    );
};

export const Table = styled(TableContainer)`
    max-height: 545px;
    overflow-y: auto;
    overflow-x: auto
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    table {
        width: 100%;
        border-collapse: collapse;
    }
`;
