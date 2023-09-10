import API from "@/services/api"
import { lobbyDetailsProps } from "./page"

export const joinRoom = (data: lobbyDetailsProps) => {
    return (dispatch: Function) => {
        API.post('/login', data).then((res: object) => {
            console.log("Response is ", res)
        }).catch((err) => {
            console.log("Error Occured")
        }).finally(() => {

        })
    }
}