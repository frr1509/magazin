import styled from "styled-components";
import { Logo, NavigateBtn, ControlPanel } from "./components";
import { Input, Content } from "../../components";

const HeaderContainer = ({ className }) => {
    return (
        <header className={className}>
            <Content display="flex" color="#1e2869" isFocused="true">
                <Logo />
                <NavigateBtn />
                <Input placeholder="Найти товар" />
                <ControlPanel />
            </Content>
        </header>
    );
};

export const Header = styled(HeaderContainer)`
    background-color: #1e2869;
    height: 100px;
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    align-items: center;
`;
