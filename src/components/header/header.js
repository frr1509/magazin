import styled from "styled-components";
import { Logo, NavigateBtn, ControlPanel, Popap } from "./components";
import { Input, Content } from "../../components";
import { useState } from "react";
import { useLockBodyScroll } from "../../hooks";

const HeaderContainer = ({ className }) => {
    const [open, setOpen] = useState(false);
    useLockBodyScroll(open, 'header');

    const hiddenPopap = () => {
        setOpen(false);
    };
    return (
        <header className={className} onClick={hiddenPopap}>
            <Content
                display="flex"
                margin="0 110px"
            >
                <Logo />
                <Popap open={open} setOpen={setOpen} />
                <NavigateBtn open={open} setOpen={setOpen} />
                <Input placeholder="Найти товар" />
                <ControlPanel />
            </Content>
        </header>
    );
};

export const Header = styled(HeaderContainer)`
    background: linear-gradient(90deg, #2448b6 0%, #05162d 100%);
    height: 100px;
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    align-items: center;
    z-index: 2000;
`;
