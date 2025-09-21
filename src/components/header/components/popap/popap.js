import styled from "styled-components";
import { useLockBodyScroll } from "../../../../hooks";
import { PopapContent } from "./components";

const PopapContainer = ({ className, open, setOpen }) => {
    useLockBodyScroll(open, "header");
    return (
        <div
            className={className}
            data-popup
            onClick={() => setOpen(false)}
            open={open}
        >
            {/* <div className="popap" onClick={(e) => e.stopPropagation()}>
                <h2>Это попап!</h2>
            </div> */}
            <PopapContent open={open} setOpen={setOpen} />
        </div>
    );
};

export const Popap = styled(PopapContainer)`
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    z-index: -1;
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition: opacity 0.3s;
`;
