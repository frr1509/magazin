import { Link } from "react-router-dom";
import { Icon } from "../../../../components";
import styled from "styled-components";

const Text = styled.div`
    font-size: 40px;
    font-weight: bold;
`;

const LogoContainer = ({ className }) => (
    <Link className={className} to="/">
        <Icon id="fa-shopping-cart" size="45px" margin="0 10px 0 0" />
        <div>
            <Text>SHOP</Text>
        </div>
    </Link>
);

export const Logo = styled(LogoContainer)`
    margin: 0 10px 0 0;
    display: flex;
    align-items: center;
`;
