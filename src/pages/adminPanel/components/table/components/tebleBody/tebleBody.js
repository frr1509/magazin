import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../../../../components";
import {
    closeModal,
    openModal,
    removeProductAsync,
} from "../../../../../../actions";
import { useDispatch } from "react-redux";
import { useServerRequest } from "../../../../../../hooks";

const TableBodyContainer = ({
    className,
    id,
    name,
    price,
    imageUrl,
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
        <tbody className={className}>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{count}</td>
                <td className="img-column">{imageUrl}</td>
                <td className="action">
                    {" "}
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
                </td>
            </tr>
        </tbody>
    );
};

export const TableBody = styled(TableBodyContainer)`
    td {
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
        text-align: center;
    }

    tr:hover {
        background-color: #f1f9ff;
    }

    & .img-column {
        max-width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    td.action {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;
