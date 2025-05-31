import { generateDate } from "../utils";

export const addUser = async (login, password) =>
    fetch("http://localhost:3005/users", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json;charset=utf-8",
        },
        body: JSON.stringify({
            login: login,
            password: password,
            register_at: generateDate(),
            role_Id: 2,
        }),
    }).then((createUser) => createUser.json());
