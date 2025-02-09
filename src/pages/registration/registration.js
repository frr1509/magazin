import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { Button, H2, Input } from "../../components";
import { server } from "../../bff";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserRoleId, setUser } from "../../store";
import { Navigate } from "react-router-dom";
import { ROLE } from "../../constants";
import { useResetForm } from "../../hooks";

const regSchemaForm = yup.object().shape({
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
    passcheck: yup
        .string()
        .required("Поле обязательно для заполнения")
        .oneOf([yup.ref("password")], "Пароли не совпадают"),
});

const RegistrationContainer = ({ className }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: "",
            password: "",
            passcheck: "",
        },
        resolver: yupResolver(regSchemaForm),
    });

    const roleId = useSelector(selectUserRoleId);

    const [serverError, setServerError] = useState(null);

    const dispatch = useDispatch();

    const onSubmit = ({ login, password }) => {
        server.register(login, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка сервера: ${error}`);
                return;
            }
            dispatch(setUser(res));
        });
    };

    const formError =
        errors?.login?.message ||
        errors?.password?.message ||
        errors?.passcheck?.message;
    const errorMessage = formError || serverError;

    useResetForm(reset);

    if (roleId !== ROLE.GUEST) {
        return <Navigate to="/" />;
    }

    return (
        <div className={className}>
            <H2>Регистрация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    borderradius="12px"
                    backgroundcolor="#f1f1f5"
                    type="text"
                    placeholder="Логин..."
                    {...register("login", {
                        onChange: () => setServerError(null),
                    })}
                    height="46px"
                    margin="0 0 10px"
                    padding="10px"
                ></Input>
                <Input
                    borderradius="12px"
                    backgroundcolor="#f1f1f5"
                    height="46px"
                    margin="0 0 10px"
                    padding="10px"
                    type="password"
                    placeholder="Пароль..."
                    {...register("password", {
                        onChange: () => setServerError(null),
                    })}
                ></Input>
                <Input
                    borderradius="12px"
                    backgroundcolor="#f1f1f5"
                    height="46px"
                    margin="0 0 20px"
                    padding="10px"
                    type="password"
                    placeholder="Повтор пароля..."
                    {...register("passcheck", {
                        onChange: () => setServerError(null),
                    })}
                ></Input>
                <Button type="submit" disabled={!!formError}>
                    Зарегистрироваться
                </Button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
        </div>
    );
};

export const Registration = styled(RegistrationContainer)`
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
