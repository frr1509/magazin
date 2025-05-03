import { useState } from "react";
import styled from "styled-components";

const CountContainer = ({ className, count, setErrorCountFlag }) => {
    const [counter, setCounter] = useState(1);
    const countMinus = () => {
        setCounter(Number(counter) - 1);
    };
    const countPlus = () => {
        setCounter(Number(counter) + 1);
    };
    const handleChange = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 4);

        setCounter(value);
    };
    const handleBlur = () => {
        if (counter === "") {
            setCounter(1);
        }
        if (Number(counter) > Number(count)) {
            setCounter(count);
            setErrorCountFlag(true);

            setTimeout(() => setErrorCountFlag(false), [2000]);
        }
    };
    return (
        <div className={className}>
            <button disabled={counter <= 1 ? true : false} onClick={countMinus}>
                -
            </button>
            <input
                type="text"
                value={counter}
                onChange={handleChange}
                maxLength={4}
                onBlur={handleBlur}
            ></input>
            <button onClick={countPlus}>+</button>
        </div>
    );
};

export const Count = styled(CountContainer)`
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: inset 0 0 0 1px rgba(26, 26, 26, 0.1);
    width: 150px;
    height: 50px;

    & > input {
        width: 50px;
        height: 50px;
        text-align: center;
        font-size: 22px;
    }

    & > input:focus {
        outline: none;
    }

    & > button {
        height: 50px;
        width: 50px;
        cursor: pointer;
        font-size: 18px;
    }
`;
