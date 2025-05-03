import styled from "styled-components";

const ButtonContainer = ({ className, children, ...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export const Button = styled(ButtonContainer)`
    cursor: pointer;
    border-radius: 12px;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    background-color: #1e2869;
    border: 2px solid #1e2869;
    display: ${({ display = "block" }) => display};
    color: ${({ color = "#000" }) => color};

`;
