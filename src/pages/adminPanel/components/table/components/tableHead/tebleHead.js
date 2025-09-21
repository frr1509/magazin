import styled from "styled-components";

const TableHeadContainer = ({ className }) => {
    return (
        <thead className={className}>
            <tr>
                <th>id</th>
                <th>Наименование</th>
                <th>Категория</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Фото</th>
                <th>Действия</th>
            </tr>
        </thead>
    );
};

export const TableHead = styled(TableHeadContainer)`
    th {
        position: sticky;
        top: 0;
        background-color: #3498db;
        color: white;
        padding: 12px 15px;
        text-align: left;
        font-weight: 600;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
`;
