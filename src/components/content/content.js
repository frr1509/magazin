import styled from "styled-components";

export const Content = styled.div`
    display: ${({ display = "block" }) => display};
    justify-content: ${({ jc = "space-between" }) => jc};
    width: ${({ width = "100%" }) => width};
    align-items: center;
    margin: 0 auto;
    padding: ${({ padding = "0" }) => padding};
    background-color: ${({ color = "#ffff}" }) => color};
`;
