import styled from "styled-components";

const H2Cpntainer = ({ className, children }) => {
    return <h2 className={className}>{children}</h2>;
};

export const H2 = styled(H2Cpntainer)`
    margin: ${({ margin = "30px 0 20px 0" }) => margin};
    text-align: center;
`;
