import styled from "styled-components";
import { useLockBodyScroll } from "../../../../hooks";

const PopapContainer = ({ className, open, setOpen }) => {
    useLockBodyScroll(open, "header");
    return (
        <div
            className={className}
            data-popup
            onClick={() => setOpen(false)}
            open={open}
        >
            <div className="popap" onClick={(e) => e.stopPropagation()}>
                <h2>Это попап!</h2>
            </div>
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

    & .popap {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: #fff;
        padding: 20px;
        width: 300px;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(-100%)"};
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        display: flex;
        flex-direction: column;
    }
`;
