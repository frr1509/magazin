import styled from "styled-components";
import { TableRow } from "../tableRow/tableRow";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { useServerRequest } from "../../../../hooks";
import { closeModal, openModal, removeProductAsync } from "../../../../actions";
import { Link } from "react-router-dom";

const ProductsRowContainer = ({
    className,
    id,
    imageUrl,
    name,
    price,
    category,
    count,
    onEdit,
}) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const onDeleteProduct = (id) => {
        dispatch(
            openModal({
                text: "Удалить товар из базы данных?",
                onConfirm: () => {
                    dispatch(removeProductAsync(requestServer, id));
                    dispatch(closeModal);
                },
                onCancel: () => dispatch(closeModal),
            }),
        );
    };
    return (
        <div className={className}>
            <TableRow border={true}>
                <div className="id-column ">{id}</div>
                <div className="name-column">{name}</div>
                <div className="category-column">{category}</div>
                <div className="price-column">{price}</div>
                <div className="quantity-column ">{count}</div>
                <div className="img-column ">{imageUrl}</div>
                <div className="actions-column ">
                    <Link to={`/product/${id}`}>
                        <Icon
                            id="fa-arrow-right"
                            margin="0 0 0 10px"
                            color="#000"
                            colorHover="#1e2869"
                        />
                    </Link>
                    <Icon
                        id="fa-pencil"
                        margin="0 0 0 10px"
                        onClick={onEdit}
                        color="#000"
                        colorHover="#1e2869"
                    />
                    <Icon
                        id="fa-trash-o"
                        margin="0 0 0 10px"
                        onClick={() => onDeleteProduct(id)}
                        color="#000"
                        colorHover="#1e2869"
                    />
                </div>
            </TableRow>
        </div>
    );
};

export const ProductsRow = styled(ProductsRowContainer)`
    table {
        width: 100%;
        border-collapse: collapse;
    }

    td {
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
    }

    tr:nth-child(even) {
        background-color: #e0e0e0;
    }

    tr:hover {
        background-color: #f1f9ff;
    }

    .action {
        display: flex;
    }
`;
