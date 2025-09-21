import styled from "styled-components";

const TableRowContainer = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 0 0 10px 0;
    border: ${({ border }) => (border ? "1px solid #000" : "none")};

    & > div {
        padding: 10px 10px;
    }

    & .id-column {
        width: 40px;
    }
    & .name-column {
        width: 200px;
    }
    & .category-column {
        width: 200px;
    }
    & .price-column {
        width: 150px;
    }
    & .quantity-column {
        width: 75px;
    }
    & .img-column {
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    & .actions-column {
        display: flex;
    }
`;
