import type { ReactElement } from "react"

interface SideBarItemsProps {
    text: string
    icon: ReactElement
    filter?: string
    onClick?: () => void
}

export const SideBarItems = (props: SideBarItemsProps) => {
    return <div className="flex pl-4 pt-8 text-slate-700" onClick={props.onClick}>
        <div className="pr-4 flex items-center cursor-pointer">
            {props.icon}
        </div>

        <div className="text-lg cursor-pointer">
            {props.text}
        </div>
    </div>
}