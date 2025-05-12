import { getUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async (authLogin, authPassword) => {
    const user = await getUser(authLogin);
    if (!user) {
        return {
            error: "Такого пользователя не существует",
            res: null,
        };
    }

    if (authPassword !== user.password) {
        return {
            error: "Неверный пароль",
            res: null,
        };
    }

    return {
        error: null,
        res: {
            id: user.id,
            login: user.login,
            roleId: user.roleId,
            totalProduct: user.totalProduct,
            session: sessions.create(user),
        },
    };
};
