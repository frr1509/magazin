import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    setCounterErrorFlag,
    setNewCounter,
    setNewQuantityAsync,
} from "../../actions";
import {
    selectBuyerId,
    selectNewCounter,
    selectUserLogin,
} from "../../selectors";
import { useMatch } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { useState } from "react";

const CountContainer = ({ className, count, quantity, id }) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const counter = useSelector(selectNewCounter);
    const isBasket = useMatch("/basket");
    const userId = useSelector(selectBuyerId);
    const userLogin = useSelector(selectUserLogin);
    const [prevValue, setPrevValue] = useState("");
    const countMinus = (plusMinus) => {
        if (isBasket) {
            const newQuantity = Number(quantity) + Number(plusMinus);
            dispatch(
                setNewQuantityAsync(
                    requestServer,
                    newQuantity,
                    id,
                    userId,
                    userLogin,
                    plusMinus,
                ),
            );
        } else {
            const newCounter = Number(counter) - 1;
            dispatch(setNewCounter(newCounter));
        }
    };
    const countPlus = (plusMinus) => {
        if (isBasket) {
            const newQuantity = Number(quantity) + Number(plusMinus);
            dispatch(
                setNewQuantityAsync(
                    requestServer,
                    newQuantity,
                    id,
                    userId,
                    userLogin,
                    plusMinus,
                ),
            );
            console.log("asd1");
            if (newQuantity === Number(count)) {
                dispatch(setCounterErrorFlag(true));

                setTimeout(() => {
                    dispatch(setCounterErrorFlag(false));
                }, [2000]);
            }
        } else {
            const newCounter = Number(counter) + 1;
            dispatch(setNewCounter(newCounter));
            if (newCounter === Number(count)) {
                dispatch(setCounterErrorFlag(true));

                setTimeout(() => {
                    dispatch(setCounterErrorFlag(false));
                }, [2000]);

                return;
            }
        }
    };
    const handleChange = (e) => {
        let value = e.target.value.replace(/\D/g, "").slice(0, 4);
        dispatch(setNewCounter(value));
    };
    const handleFocus = (e) => {
        setPrevValue(e.target.value);
    };
    const handleBlur = (e) => {
        if (isBasket) {
            if (e.target.value === "") {
                dispatch(
                    setNewQuantityAsync(
                        requestServer,
                        prevValue,
                        id,
                        userId,
                        userLogin,
                    ),
                );
            }
            if (Number(e.target.value) > Number(count)) {
                dispatch(
                    setNewQuantityAsync(
                        requestServer,
                        count,
                        id,
                        userId,
                        userLogin,
                    ),
                );
                dispatch(setCounterErrorFlag(true));

                setTimeout(() => dispatch(setCounterErrorFlag(false)), [2000]);
            }
        } else {
            if (counter === "") {
                dispatch(setNewCounter(1));
            }
            if (Number(counter) >= Number(count)) {
                dispatch(setNewCounter(count));
                dispatch(setCounterErrorFlag(true));
                setTimeout(() => dispatch(setCounterErrorFlag(false)), [2000]);
            }
        }
    };

    const disabledMinus = () => {
        if (isBasket) {
            return quantity <= 1 ? true : false;
        } else {
            return counter <= 1 ? true : false;
        }
    };
    const disabledPlus = () => {
        if (isBasket) {
            return quantity >= count ? true : false;
        } else {
            return counter >= count ? true : false;
        }
    };
    return (
        <div className={className}>
            <button disabled={disabledMinus()} onClick={() => countMinus(-1)}>
                -
            </button>
            <input
                type="text"
                value={isBasket ? quantity : counter}
                onChange={handleChange}
                maxLength={4}
                onFocus={handleFocus}
                onBlur={handleBlur}
            ></input>
            <button disabled={disabledPlus()} onClick={() => countPlus(1)}>
                +
            </button>
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
        font-size: 24px;
    }

    & > button:hover {
        color: #1e2869;
    }
`;
