import { useEffect, useState } from "react"
import { Iframe } from "./iframe"

interface youtubeProps{
    url: string
}

export const Youtubing = (prop: youtubeProps) => {
    const [ready, setReady] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 2000)
        return () => clearTimeout(timer)
    }, [prop.url])

    if(!ready){
        return <div className="text-center">⏳ Preparing video...</div>
    }

    if(prop.url.includes("embed")){
        return <iframe className="aspect-video justify-center"
            src={prop.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    }
    else if(prop.url.includes("=")){
        let list = prop.url.split("=")
        const id = list[list.length - 1]

        return <Iframe id={id}/>
    }
    else{
        let list = prop.url.split("/")
        const id = list[list.length - 1]

        return <Iframe id={id}/>
    }
}