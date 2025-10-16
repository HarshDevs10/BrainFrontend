import { BrainIcon } from "../icons/brainIcon"
import { DocumentIcon } from "../icons/documentIcon"
import { LinkIcon } from "../icons/linkIcon"
import { TagIcon } from "../icons/tagIcon"
import { TwitterIcon } from "../icons/twitterIcon"
import { YoutubeIcon } from "../icons/youtubeIcon"
import { SideBarItems } from "../utility/sidebarItem"

export const Sidebar = () => {
    return <div className="h-screen bg-white shadow-lg fixed top-0 left-0 w-72 pl-8">
        <div className="text-2xl font-semibold pt-4 flex items-center">
            <BrainIcon size="2xl"/>
            <div className="pl-3">
                Brainly
            </div>
        </div>
        <div className="flex flex-col pt-4">
            <SideBarItems text="Tweets" icon={<TwitterIcon size="lg"/>}/>
            <SideBarItems text="Videos" icon={<YoutubeIcon size="lg"/>}/>
            <SideBarItems text="Docs" icon={<DocumentIcon size="lg"/>}/>
            <SideBarItems text="Link" icon={<LinkIcon size="lg"/>}/>
            <SideBarItems text="Tags" icon={<TagIcon size="lg"/>}/>
        </div>
    </div>
}