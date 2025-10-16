import { Tweet } from "react-tweet"

interface TweetProps {
    url: string
}

export const Twitting = (prop: TweetProps) => {
    let list = prop.url.split("/")
    const id = list[list.length - 1]

    if(id != null){
        return <Tweet id={id}/>
    }
    else{
        return null
    }
}