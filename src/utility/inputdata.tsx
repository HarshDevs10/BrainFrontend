import type React from "react"

interface InputProps{
    placeholder: string
    ref?: React.ForwardedRef<any>
}


export const InputData = (prop: InputProps) => {
    return <input type="text" ref={prop.ref} placeholder={`${prop.placeholder}`} className="bg-white shadow p-2 rounded-sm mt-5"/>
}