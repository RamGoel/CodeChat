import API from "@/services/api"
import { lobbyDetailsProps } from "./page"
import { setInviteLink } from "@/redux/slices/authSlice"
interface apiResponse {
    data: dataProps
}

interface dataProps {
    inviteLink: string
}
export const joinRoom = (data: lobbyDetailsProps, callback: Function) => {
    return (dispatch: Function) => {
        API.post('/login', data).then((res: apiResponse) => {
            dispatch(setInviteLink(res?.data?.inviteLink))
            if (callback) {
                callback()
            }
        }).catch((err) => {
            console.log("Error Occured", err)
        }).finally(() => {

        })
    }
}