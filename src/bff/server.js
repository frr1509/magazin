import { addUser } from "./addUser";
import { getUser } from "./getUser";
import { sessions } from "./sessions";

export const server = {
    async authorize(authLogin, authPassword) {
        const user = await getUser(authLogin);

        if (!user) {
            return {
                error: "Такого пользователя не существует",
                res: null,
            };
        }

        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                role_id: user.role_id,
                session: sessions.create(user),
            },
        };
    },
    async register(regLogin, regPassword) {
        const existedUser = await getUser(regLogin);

        if (existedUser) {
            return {
                error: "Пользователь с таким логином уже зарегистрирован",
                res: null,
            };
        }

        const user = await addUser(regLogin, regPassword);

        return {
            error: null,
            res: {
                id: user.id,
                login: user.login,
                role_id: user.role_id,
                session: sessions.create(user),
            },
        };
    },
    async logout(session) {},
};
