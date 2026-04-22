import type React from "react"
import { BrainIcon } from "../icons/brainIcon"
import { DocumentIcon } from "../icons/documentIcon"
import { LinkIcon } from "../icons/linkIcon"
import { TagIcon } from "../icons/tagIcon"
import { TwitterIcon } from "../icons/twitterIcon"
import { YoutubeIcon } from "../icons/youtubeIcon"
import { SideBarItems } from "../utility/sidebarItem"
import type { cardProps } from "../utility/cardProps"
import { useEffect, useState } from "react"

interface SideBarProps{
    AllCard: cardProps[]
    setCardsec: React.Dispatch<React.SetStateAction<cardProps[]>>
}

export const Sidebar = (props: SideBarProps) => {
    const [filter, setFilter] = useState<string>("none")

    useEffect(() => {
    if (filter === "none") {
        props.setCardsec(props.AllCard)
    } else {
        const filtered = props.AllCard.filter(card => card.type === filter)
        props.setCardsec(filtered)
    }
}, [filter, props.AllCard])

    return <div className="h-screen bg-white shadow-lg fixed top-0 left-0 w-72 pl-8">
        <div className="text-2xl font-semibold pt-4 flex items-center">
            <BrainIcon size="2xl"/>
            <div className="pl-3">
                Brainly
            </div>
        </div>
        <div className="flex flex-col pt-4">
            <SideBarItems text="Tweets" icon={<TwitterIcon size="lg"/>} filter={filter} 
                onClick={() => {setFilter(prev => prev === "tweet"? "none" : "tweet")}}/>
            <SideBarItems text="Videos" icon={<YoutubeIcon size="lg"/>} filter={filter}
                onClick={() => {setFilter(prev => prev === "youtube"? "none" : "youtube")}}/>
            <SideBarItems text="Docs" icon={<DocumentIcon size="lg"/>}/>
            <SideBarItems text="Link" icon={<LinkIcon size="lg"/>}/>
            <SideBarItems text="Tags" icon={<TagIcon size="lg"/>}/>
        </div>
    </div>
}