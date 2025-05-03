import { useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectProduct } from "../../selectors";
import { Icon } from "../icon/icon";

const NavigateContainer = ({ className }) => {
    const product = useSelector(selectProduct);
    const navigate = useNavigate();
    const productFlag = useMatch("/product/:id");
    const basketFlag = useMatch("/basket");
    return (
        <div className={className}>
            <Icon onClick={() => navigate(-1)} id="fa-long-arrow-left" />
            <ul className={className}>
                <ol>
                    <Link to="/">Главная</Link>
                </ol>
                {basketFlag ? (
                    <>
                        <ol>
                            <span>/</span>
                        </ol>
                        <ol>
                            <span>Корзина</span>
                        </ol>
                    </>
                ) : (
                    <>
                        <ol>
                            <span>/</span>
                        </ol>
                        <ol>
                            <Link to="/category">{product.category}</Link>
                        </ol>
                        {productFlag ? (
                            <>
                                <ol>
                                    <span>/</span>
                                </ol>
                                <ol>
                                    <span>{product.name}</span>
                                </ol>
                            </>
                        ) : null}
                    </>
                )}
            </ul>
        </div>
    );
};

export const Navigate = styled(NavigateContainer)`
    display: flex;
    align-items: center;
    & > ol > a {
        color: #000;
    }
    & > ol {
        padding: 5px;
    }
    & > ul {
        padding: 0 0 0 20px;
    }
`;
