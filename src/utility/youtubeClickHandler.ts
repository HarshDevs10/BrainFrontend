import type React from "react"

interface YoutubeHandlerProps {
    type: string
    setType: React.Dispatch<React.SetStateAction<string>>
}

export const YoutubeClickHandler = (prop: YoutubeHandlerProps) => {
    if(prop.type === "none"){
        prop.setType("youtube")
    }
    else{
        prop.setType("none")
    }
}