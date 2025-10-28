import { useState } from "react"
import { ShareIcon } from "../icons/shareIcon"
import { TrashIcon } from "../icons/trashIcon"
import { TwitterIcon } from "../icons/twitterIcon"
import { YoutubeIcon } from "../icons/youtubeIcon"
import { Twitting } from "../utility/tweets"
import { Youtubing } from "../utility/youtube"
import { LinkClickHandler } from "../utility/linkClickHandler"
import { CoppiedIcon } from "../icons/coppiedIcon"
import { type cardProps } from "../utility/cardProps"
import { DeleteClickHandler } from "../utility/deleteClickHandler"

export const Card = (prop: cardProps) => {

    const [clicked, setClicked] = useState(false)
    const url = prop.url
    const setCardsec = prop.setCardsec
    const title = prop.title
    const type = prop.type

    return <div className="bg-white border-gray-200 border p-2 rounded-lg max-w-80 mb-6 break-inside-avoid">
        <div className="flex items-center justify-between">
            <div className="flex items-center text-md font-semibold">
                <div className="text-gray-400 pr-3">
                    {prop.type === "tweet"? <TwitterIcon size="md"/> : <YoutubeIcon size="md"/>}
                </div>
                {prop.title}
            </div>
            <div className="flex text-gray-400 items-center">
                <div className="p-3 cursor-pointer transition-all delay-500" onClick={() => {LinkClickHandler({setClicked, url})}}>
                    {clicked? <CoppiedIcon size="lg"/>:<ShareIcon size="lg"/>}
                </div>
                <div className="cursor-pointer" onClick={() => {DeleteClickHandler({setCardsec, type, title, url})}}>
                    <TrashIcon size="lg"/>
                </div>
            </div>
        </div>
        <div className="pt-4">
            {prop.type === "tweet" ? 
            <Twitting url={prop.url}/> :
            <Youtubing url={prop.url}/> 
            }
        </div>
    </div>
} 

