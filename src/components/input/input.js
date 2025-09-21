import { forwardRef } from "react";
import styled from "styled-components";

const InputContainer = forwardRef(({ className, ...props }, ref) => {
    return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
    width: 100%;
    margin: ${({ margin = "0 10px" }) => margin};
    height: ${({ height = "57px" }) => height};
    border-radius: ${({ borderradius = "20px" }) => borderradius};
    padding: ${({ padding = "20px" }) => padding};
    font-size: ${({ fontSize = "18px" }) => fontSize};
    border: ${({ border = "none" }) => border};
    background: ${({ backgroundcolor = "#fff" }) => backgroundcolor};
    &: focus {
        outline: ${({ isfocused = true }) =>
            isfocused ? "#1e2869 solid 1px" : "none"};
        background: #fff;
    }
`;
