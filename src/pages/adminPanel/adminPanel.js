import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useServerRequest } from "../../hooks";
import { loadCategorysAsync, loadProductsAsync } from "../../actions";
import { selectCategorys } from "../../selectors";
import { ProductForm, Table } from "./components";
import { H2, NavigateRow } from "../../components";

const AdminPanelContainer = ({ className }) => {
    const categorys = useSelector(selectCategorys);
    const [editProduct, setEditProduct] = useState(null);
    const dispatch = useDispatch();
    const requestServer = useServerRequest();

    useEffect(() => {
        dispatch(loadProductsAsync(requestServer));
        dispatch(loadCategorysAsync(requestServer));
    }, [dispatch, requestServer]);

    return (
        <div className={className}>
            <div>
                <NavigateRow />
                <H2>Админ-панель</H2>
            </div>
            <div className="product">
                <ProductForm
                    editProduct={editProduct}
                    categorys={categorys}
                    setEditProduct={setEditProduct}
                />
                <Table setEditProduct={setEditProduct} />
            </div>
        </div>
    );
};

export const AdminPanel = styled(AdminPanelContainer)`
    .product {
        display: flex;
        align-items: center;
        margin: 30px 0 0 0;
        gap: 30px;
    }
`;


    /* <ProductForm
                editProduct={editProduct}
                categorys={categorys}
                setEditProduct={setEditProduct}
            />
            <div className="product-list">
                <TableRow border={true}>
                    <div className="id-column">id</div>
                    <div className="name-column">Наименование</div>
                    <div className="category-column">Категория</div>
                    <div className="price-column">Цена</div>
                    <div className="quantity-column">Кол-во</div>
                    <div className="img-column">Фото</div>
                    <div className="actions-column">Действия</div>
                </TableRow>
                {products.map(
                    ({ id, name, price, imageUrl, category, count }) => (
                        <ProductsRow
                            key={id}
                            id={id}
                            imageUrl={imageUrl}
                            name={name}
                            price={price}
                            category={category}
                            count={count}
                            onEdit={() =>
                                setEditProduct({
                                    id,
                                    name,
                                    price,
                                    count,
                                    category,
                                    imageUrl,
                                })
                            }
                        />
                    ),
                )}
            </div> */

