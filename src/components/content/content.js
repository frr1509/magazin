import styled from "styled-components";

export const Content = styled.div`
    display: ${({ display = "block" }) => display};
    justify-content: ${({ jc = "space-between" }) => jc};
    width: 100%;
    align-items: center;
    margin: 0 auto;
    padding: ${({ padding = "0" }) => padding};
`;
