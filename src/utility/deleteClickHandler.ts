import axios from "axios"
import type { cardProps } from "./cardProps"
import { BACKEND_URL } from "../config"

export const DeleteClickHandler = (prop : cardProps) => {
  axios.delete(`${BACKEND_URL}/api/v1/content`, {data: {
    title: prop.title,
    type: prop.type,
    url: prop.url
  }, withCredentials: true}).then(() => {
    prop.setCardsec(prev => 
      prev.filter(
        items =>
           !(items.title == prop.title &&
            items.type == prop.type &&
            items.url == prop.url
           )))
  }).catch((Error) => {
    console.log(Error)
  })
}