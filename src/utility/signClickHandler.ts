import axios from "axios"
import type React from "react"
import { BACKEND_URL } from "../config"
import { type NavigateFunction } from "react-router"

interface SignClickHandlerProps{
    userRef: React.RefObject<any>
    passRef: React.RefObject<any>
    setErrorMes: React.Dispatch<React.SetStateAction<string | null>>
    URL: string
    Navigate: NavigateFunction
}

export const SignClickHandler = (prop: SignClickHandlerProps) => {
    const userName = prop.userRef?.current.value
    const password = prop.passRef?.current.value
    console.log(userName)
    console.log(password)
    axios.post( `${BACKEND_URL}${prop.URL}`, {
        userName,
        password
    }).then(() => {prop.Navigate("/DashBoard")})
    .catch((e) => {prop.setErrorMes(e.response.data.err? e.response.data.err : e.response.data.message)})
}