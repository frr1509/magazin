import { Link } from "react-router-dom";
import { Icon } from "../../../../icon/icon";
import styled from "styled-components";

const ControlPanelBtnContainer = ({ className, icon, children, way }) => (
    <Link className={className} to={`${way}`}>
        <Icon id={`${icon}`} />
        <div>{children}</div>
    </Link>
);

export const ControlPanelBtn = styled(ControlPanelBtnContainer)`
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
    margin: ${({ margin = "10px" }) => margin};
    text-align: center;
    & > div {
        margin: 10px 0 0 0;
    }
`;
