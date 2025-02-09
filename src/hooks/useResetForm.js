import { useEffect } from "react"
import { useStore } from "react-redux"

export const useResetForm = (reset) => {
    const store = useStore()

    useEffect(() => {
        let currentWasLogout = store.getState().app.wasLogout

        return store.subscribe(() => {
            let prevWWasLogout = currentWasLogout
            currentWasLogout = store.getState().app.wasLogout

            if(currentWasLogout !== prevWWasLogout) {
                reset()
            }
        })
    }, [reset, store])
}
