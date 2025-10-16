import type React from "react"

interface LinkClickHandlerProps {
    setClicked: React.Dispatch<React.SetStateAction<boolean>>
    url: string
}

export const LinkClickHandler = (prop: LinkClickHandlerProps) => {
    navigator.clipboard.writeText(prop.url)
    prop.setClicked(true)

    setTimeout(() => {
        prop.setClicked(false)
    }, 1000)
}