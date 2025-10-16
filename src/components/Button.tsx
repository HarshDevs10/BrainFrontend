import type { ReactElement } from "react"

interface ButtonProp {
    variant: "Primary" | "Secondary"
    size: "md" | "sm" | "lg"
    text: string
    onClick: () => void
    fullWidth: "yes" | "no"
    stratIcon?: ReactElement
    endIcon?: ReactElement
}

const variantStyle = {
    "default": "bg-purple-500 text-white",
    "Primary": "bg-[#5046e4] text-white",
    "Secondary": "bg-[#e0e7ff] text-[#5046e4]"
}

const sizeStyle = {
    "md": " py-2 px-4",
    "lg": " py-3 px-5",
    "sm": " py-1 px-2"
}

const widthStyle = {
    "yes": "w-full justify-center items-center",
    "no": ""
}

const defaultStyle = {
    "default": "flex rounded-lg cursor-pointer"
}

export const Button = (prop: ButtonProp) => {
    return <button 
    className={`${variantStyle[prop.variant]} ${sizeStyle[prop.size]} ${defaultStyle.default} ${widthStyle[prop.fullWidth]}`}
    onClick={prop.onClick}>
        {prop.stratIcon ? <span className="pr-2 flex items-center justify-center">{prop.stratIcon}</span>: null}
        {prop.text}
        {prop.endIcon ? <span className="pl-2 flex items-center justify-center">{prop.endIcon}</span>: null}
        </button>
}