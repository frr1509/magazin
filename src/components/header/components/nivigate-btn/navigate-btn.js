import { Link } from "react-router-dom";
import { Icon } from "../../../../components";
import styled from "styled-components";

const NavigateBtnContainer = ({ className }) => (
    <Link className={className} to="/catalog">
        <Icon id="fa-bars" size="25px" />
    </Link>
);

export const NavigateBtn = styled(NavigateBtnContainer)`
    padding: 10px 15px;
    border: 2px solid;
    border-radius: 15px;
    cursor: pointer;
`;
