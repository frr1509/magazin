import { useSelector } from "react-redux";
import styled from "styled-components";
import {
    selectIsopen,
    selectOnCancel,
    selectOnConfirm,
    selectText,
} from "../../selectors";
import { Button } from "../button/button";

const ModalodalContainer = ({ className }) => {
    const isOpen = useSelector(selectIsopen);
    const onCancel = useSelector(selectOnCancel);
    const onConfirm = useSelector(selectOnConfirm);
    const text = useSelector(selectText);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={className}>
            <div className="overlay"></div>
            <div className="box">
                <h3>{text}</h3>
                <div className="buttons">
                    <Button width="120px" onClick={onConfirm}>
                        Да
                    </Button>
                    <Button width="120px" onClick={onCancel}>
                        Отмена
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const Modal = styled(ModalodalContainer)`
    position: fixed;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    & .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }

    & .box {
        text-align: center;
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        width: 400px;
        margin: 0 auto;
        padding: 0 20px 20px;
        background-color: #fff;
        border: 3px solid #000;
        z-index: 30;
    }

    & .buttons {
        display: flex;
        justify-content: center;
    }

    & .buttons button {
        margin: 0 5px;
    }
`;
