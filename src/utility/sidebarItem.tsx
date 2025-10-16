import type { ReactElement } from "react"

interface SideBarItemsProps {
    text: string
    icon: ReactElement
}

export const SideBarItems = (prop: SideBarItemsProps) => {
    return <div className="flex pl-4 pt-8 text-slate-700">
        <div className="pr-4 flex items-center cursor-pointer">
            {prop.icon}
        </div>

        <div className="text-lg cursor-pointer">
            {prop.text}
        </div>
    </div>
}