import type React from "react"

interface TweetHandlerProps {
    type: string
    setType: React.Dispatch<React.SetStateAction<string>>
}

export const TweetClickHandler = (prop: TweetHandlerProps) => {
    if(prop.type === "none"){
        prop.setType("tweet")
    }
    else{
        prop.setType("none")
    }
}