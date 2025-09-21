import styled from "styled-components";

const ErrorCountContainer = ({ className, count, price, errorCountFlag }) => {
    return (
        <div className={className}>
            {price}В наличии только: {count}
        </div>
    );
};

export const ErrorCount = styled(ErrorCountContainer)`
    display: ${({ errorCountFlag }) =>
        errorCountFlag === true ? "block" : "none"};
    left: 50%;
    top: 50%;
    position: fixed;
    z-index: 99;
    min-width: 400px;
    padding: 30px 40px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 130%;
    color: #000000;
    border-radius: 0;
    background: #d9d9d9;
    margin-left: -240px;
    margin-top: -187.5px;
`;
