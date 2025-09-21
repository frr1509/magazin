import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button, H2, Input } from "../../../../components";
import { useDispatch } from "react-redux";
import { useServerRequest } from "../../../../hooks";
import { addNewProductAsync, editProductAsync } from "../../../../actions";

const addProductSchema = yup.object().shape({
    name: yup.string().required("Название обязательно для заполнения"),
    category: yup.string().required("Категория обязательна"),
    price: yup
        .number()
        .transform((value) =>
            isNaN(value) || value === "" ? undefined : value,
        )
        .required("Цена обязательна для заполнения")
        .min(1, "Цена должна быть больше 0"),
    count: yup
        .number()
        .transform((value) =>
            isNaN(value) || value === "" ? undefined : value,
        )
        .required("Кол-во обязательно для заполнения")
        .min(1, "Должен быть минимум 1 товар")
        .max(99, "Максимально количество 99"),
    image: yup.string().required("Ссылка на фото обязательно для заполнения"),
});

const ProductFormContainer = ({
    className,
    editProduct,
    categorys,
    setEditProduct,
}) => {
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: editProduct
            ? {
                  name: editProduct.name || "",
                  category: editProduct.category || "",
                  price: editProduct.price || "",
                  count: editProduct.count || "",
                  image: editProduct.imageUrl || "",
              }
            : {
                  name: "",
                  category: "",
                  price: "",
                  count: "",
                  image: "",
              },
        resolver: yupResolver(addProductSchema),
    });

    useEffect(() => {
        if (editProduct) {
            reset({
                name: editProduct.name || "",
                category: editProduct.category || "",
                price: editProduct.price || "",
                count: editProduct.count || "",
                image: editProduct.imageUrl || "",
            });
        } else {
            reset({
                name: "",
                category: "",
                price: "",
                count: "",
                image: "",
            });
        }
    }, [editProduct, reset]);

    const dispatch = useDispatch();
    const requestServer = useServerRequest();

    const onSubmit = (data) => {
        if (editProduct) {
            dispatch(editProductAsync(requestServer, data, editProduct.id));
            setEditProduct(null);
            reset();
        } else {
            dispatch(addNewProductAsync(requestServer, data));
            setEditProduct(null);
            reset();
        }
    };

    const cancel = (e) => {
        e.preventDefault();
        setEditProduct(null);
        reset();
    };
    return (
        <div className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <H2 margin="10px 0 10px 0">Добавление/редактирование товара</H2>
                <div
                    className="input-group"
                    data-hint="Введите название товара"
                >
                    <input
                        type="text"
                        {...register("name")}
                        id="name"
                        className={`input-field${watch("name") ? " filled" : ""}`}
                    />
                    <label htmlFor="name" className="input-lable">
                        Название
                    </label>
                    {errors?.name && <div>{errors?.name?.message}</div>}
                </div>
                <div className="input-group">
                    <select
                        {...register("category")}
                        className={watch("category") ? "filled" : ""}
                        defaultValue=""
                    >
                        <option value="" disabled hidden></option>
                        {categorys.map(({ id: categorysId, name }) => (
                            <option key={categorysId} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="category" className="input-lable">
                        Категория
                    </label>
                    {errors?.category && <div>{errors?.category?.message}</div>}
                </div>
                <div className="input-group" data-hint="Введите цену товара">
                    <input
                        type="number"
                        {...register("price")}
                        id="price"
                        className={`input-field${watch("price") ? " filled" : ""}`}
                    />
                    <label htmlFor="price" className="input-lable">
                        Цена
                    </label>
                    {errors?.price && <div>{errors?.price?.message}</div>}
                </div>
                <div
                    className="input-group"
                    data-hint="Введите количество товара, макс. 99 шт."
                >
                    <input
                        type="number"
                        {...register("count")}
                        id="count"
                        className={`input-field${watch("count") ? " filled" : ""}`}
                    />
                    <label htmlFor="count" className="input-lable">
                        Количество
                    </label>
                    {errors?.count && <div>{errors?.count?.message}</div>}
                </div>
                <div
                    className="input-group"
                    data-hint="Введите ссылку на фото товара"
                >
                    {" "}
                    <input
                        type="text"
                        {...register("image")}
                        id="image"
                        className={`input-field${watch("image") ? " filled" : ""}`}
                    />
                    <label htmlFor="image" className="input-lable">
                        Фото
                    </label>
                    {errors?.image && <div>{errors?.image?.message}</div>}
                </div>

                <div className="btn">
                    <Button type="submit" color="#fff">
                        {editProduct ? "Сохранить" : "Добавить"}
                    </Button>
                    {editProduct && (
                        <Button onClick={cancel} color="#fff">
                            Отмена
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export const ProductForm = styled(ProductFormContainer)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #f5f7fa;

    & > form {
        width: 400px;
        padding: 32px 32px 24px 32px;
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(30, 40, 105, 0.09);
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    & > form > div > select {
        font-size: 1rem;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 6px;
        outline: none;
        transition: border 0.2s;
        background: #fff;
        width: 100%;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z'/></svg>");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 20px 20px;
        padding-right: 38px;
    }

    & > form > select:focus {
        border-color: #3366ff;
    }

    & > form > div {
        color: #e53935;
        font-size: 0.95rem;
        margin-top: -10px;
        margin-bottom: 4px;
        min-height: 16px;
    }

    .input-group {
        position: relative;
        margin-bottom: 20px;
    }

    .input-lable {
        position: absolute;
        left: 15px;
        top: 15px;
        font-size: 16px;
        color: #999;
        transition: all 0.3s ease;
        pointer-events: none;
        background-color: #fff;
    }

    .input-field {
        width: 100%;
        padding: 15px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        transition: border-color 0.3s;
    }

    .input-field:focus {
        border-color: #4a90e2;
    }

    .input-field:focus + .input-lable,
    .input-field.filled + .input-lable {
        top: -10px;
        left: 10px;
        font-size: 12px;
        color: #4a90e2;
        border-color: #4a90e2;
        background-color: white;
        padding: 0 5px;
    }

    .input-group::after {
        content: attr(data-hint);
        position: absolute;
        left: 2px;
        bottom: -18px;
        font-size: 12px;
        color: #888;
        opacity: 0;
        transform: translateY(-5px);
        transition: all 0.2s ease;
    }

    .input-group:focus-within::after {
        opacity: 1;
        transform: translateY(0);
    }

    select.filled:not(:focus) + .input-lable,
    select:focus + .input-lable {
        top: -10px;
        left: 10px;
        font-size: 0.85rem;
        color: #3366ff;
        background: rgb(255, 255, 255);
        padding: 0 5px;
    }

    .btn {
        display: flex;
        justify-content: center;
        gap: 30px;
    }
`;
