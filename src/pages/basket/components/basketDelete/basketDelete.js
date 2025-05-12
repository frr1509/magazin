import styled from "styled-components";
import { Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { useServerRequest } from "../../../../hooks";
import { deleteBasketAsync } from "../../../../actions";

const BasketDeleteContainer = ({ className, userId, userLogin, children }) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const deleteBasket = () => {
        dispatch(deleteBasketAsync(requestServer, userId, userLogin));
    };
    return (
        <button onClick={deleteBasket} className={className}>
            {children}
            <Icon margin="0 0 0 10px" id="fa-trash-o" />
        </button>
    );
};

export const BasketDelete = styled(BasketDeleteContainer)`
    font-size: 15px;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
        color: #1e2869;
    }
`;
