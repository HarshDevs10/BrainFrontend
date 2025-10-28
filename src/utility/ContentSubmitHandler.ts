import axios from "axios";
import type React from "react";
import { BACKEND_URL } from "../config";
import type { cardProps } from "./cardProps";

interface SubmitHandlerProps {
    TitleRef: React.RefObject<any>
    URLRef: React.RefObject<any>
    TagRef: React.RefObject<any>
    type: string
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setError: React.Dispatch<React.SetStateAction<string | null>>
    setCardsec: React.Dispatch<React.SetStateAction<cardProps[]>>
}

export const ContentSubmitHandler = (prop: SubmitHandlerProps) => {
    const Title = prop.TitleRef.current.value
    const Tag = prop.TagRef.current.value
    const URL = prop.URLRef.current.value
    const type = prop.type

    if (type === "none"){
        prop.setError("Choose the type of content.")
    }
    else{
        axios.post(`${BACKEND_URL}/api/v1/content`, {
            url: URL,
            type,
            title: Title,
            tags: Tag
        },{
            withCredentials: true
        }).then(() => {
            axios.get(`${BACKEND_URL}/api/v1/content`, {
                withCredentials: true
            }).then((res) => {
                const formatted = res.data.content.map((item: any) => ({
                    type: item.type,
                    title: item.title,
                    url: item.url,
                    setCardsec: prop.setCardsec
                }))
                prop.setCardsec(formatted)
                prop.setOpen(false)
            }).catch((err) => {
                prop.setError(err.response.data)
            })
        }).catch((err) => {
            prop.setError(err.response.data)
        })
    }
}