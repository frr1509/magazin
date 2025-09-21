import styled from "styled-components";
import { ControlPanelBtn } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { ROLE } from "../../../../bff/constants";
import { Icon } from "../../../icon/icon";
import {
    selectTotalProduct,
    selectUserLogin,
    selectUserRoleId,
    selectUserSession,
} from "../../../../selectors";
import { logout } from "../../../../actions";

const StyledLink = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const StyledDiv = styled.div`
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    margin: ${({ margin = "10px" }) => margin};
    text-align: center;
    & > div {
        margin: 10px 0 0 0;
    }
    color: #d4d4d4;

    &:hover {
        color: #fff;
    }
`;

const ControlPanelContainer = ({ className }) => {
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRoleId);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectUserSession);
    const totalProduct = useSelector(selectTotalProduct);
    const onLogout = () => {
        dispatch(logout(session));
        sessionStorage.removeItem("userData");
    };
    return (
        <div className={className}>
            <ControlPanelBtn icon="fa-lock" way="/admin">
                Админ
            </ControlPanelBtn>
            <ControlPanelBtn
                icon="fa-shopping-cart"
                way="/basket"
                totalProduct={totalProduct}
            >
                Корзина
            </ControlPanelBtn>
            {roleId === ROLE.GUEST ? (
                <ControlPanelBtn icon="fa-user" way="/login">
                    Войти
                </ControlPanelBtn>
            ) : (
                <StyledDiv>
                    <StyledLink onClick={onLogout}>
                        <Icon id="fa-sign-out" margin="0 0 0 10px" />
                    </StyledLink>
                    <div className="name">{login}</div>
                </StyledDiv>
            )}
        </div>
    );
};

export const ControlPanel = styled(ControlPanelContainer)`
    align-items: center;
    display: flex;
    & .name {
        font-size: 15px;
    }
`;
