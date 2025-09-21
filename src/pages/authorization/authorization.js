import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { Button, H2, Input } from "../../components";
import { server } from "../../bff";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { ROLE } from "../../bff/constants";
import { useResetForm } from "../../hooks";
import { selectUserRoleId } from "../../selectors";
import { setUser } from "../../actions";

const AuthSchemaForm = yup.object().shape({
    login: yup
        .string()
        .required("Поле обязательно для заполнения")
        .max(15, "Максим 15 симолов")
        .min(3, "Минимум 6 символов")
        .matches(/^\w+$/, "Допускаются только буквы и цифры"),
    password: yup
        .string()
        .required("Поле обязательно для заполнения")
        .max(30, "Максим 30 симолов")
        .min(6, "Минимум 6 символов")
        .matches(/^[\w#%]+$/, "Допускаются только буквы, цифры и знаки #,%"),
});

const AuthorizationContainer = ({ className }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            password: "",
        },
        resolver: yupResolver(AuthSchemaForm),
    });

    const roleId = useSelector(selectUserRoleId);

    const [serverError, setServerError] = useState(null);

    const dispatch = useDispatch();

    const onSubmit = ({ login, password }) => {
        server.authorize(login, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка сервера: ${error}`);
                return;
            }
            dispatch(setUser(res));
            sessionStorage.setItem("userData", JSON.stringify(res));
        });
    };

    const formError = errors?.login?.message || errors?.password?.message;
    const errorMessage = formError || serverError;

    const StyledLink = styled(Link)`
        color: #000;
        text-align: center;
        text-decoration: underline;
        margin: 20px 0;
        font-size: 18px;
    `;

    useResetForm(reset);

    if (roleId !== ROLE.GUEST) {
        return <Navigate to="/" />;
    }

    return (
        <div className={className}>
            <H2>Авторизация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    borderradius="12px"
                    backgroundcolor="#f1f1f5"
                    type="text"
                    placeholder="Логин..."
                    {...register("login")}
                    height="46px"
                    margin="0 0 10px"
                    padding="10px"
                ></Input>
                <Input
                    borderradius="12px"
                    backgroundcolor="#f1f1f5"
                    height="46px"
                    margin="0 0 20px"
                    padding="10px"
                    type="password"
                    placeholder="Пароль..."
                    {...register("password")}
                ></Input>
                <Button color="#fff" type="submit" disabled={!!formError}>
                    Авторизация
                </Button>
                {errorMessage && <div>{errorMessage}</div>}
                <StyledLink to="/register">Регистрация</StyledLink>
            </form>
        </div>
    );
};

export const Authorization = styled(AuthorizationContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 440px;
    background-color: #fff;
    padding: 0 40px 40px 40px;
    border-radius: 20px;
    margin: 50px 0;

    & > form {
        display: flex;
        flex-direction: column;
        width: 300px;
    }
`;
