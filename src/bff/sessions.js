import { addSession, deleteSession, getSession } from "./api";
export const sessions = {
    create(user) {
        const hash = Math.random().toFixed(50);

        addSession(hash, user);

        return hash;
    },
    async remove(hash) {
        const session = await getSession(hash);

        if (!session) {
            return;
        }
        deleteSession(session.id);
    },

    async access(hash, accesRoles) {
        const dbSession = await getSession(hash);
        return !!dbSession.user && accesRoles.includes(dbSession.user.roleId);
    },
};
