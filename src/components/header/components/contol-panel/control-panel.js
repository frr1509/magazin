import styled from "styled-components";
import { ControlPanelBtn } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
    logout,
    selectSession,
    selectUserLogin,
    selectUserRoleId,
} from "../../../../store";
import { ROLE } from "../../../../constants";
import { Icon } from "../../../icon/icon";

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
`;

const ControlPanelContainer = ({ className }) => {
    const dispatch = useDispatch();
    const roleId = useSelector(selectUserRoleId);
    const login = useSelector(selectUserLogin);
    const session = useSelector(selectSession);
    return (
        <div className={className}>
            <ControlPanelBtn icon="fa-shopping-basket" way="/basket">
                Корзина
            </ControlPanelBtn>
            {roleId === ROLE.GUEST ? (
                <ControlPanelBtn icon="fa-user" way="/login">
                    Войти
                </ControlPanelBtn>
            ) : (
                <StyledDiv>
                    <StyledLink onClick={() => dispatch(logout(session))}>
                        <Icon id="fa-sign-out" margin="0 0 0 10px" />
                    </StyledLink>
                    <div>{login}</div>
                </StyledDiv>
            )}
        </div>
    );
};

export const ControlPanel = styled(ControlPanelContainer)`
    display: flex;
`;
