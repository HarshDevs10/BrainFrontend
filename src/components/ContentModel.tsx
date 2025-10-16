import type React from "react"
import { CloseIcon } from "../icons/closeIcon"
import { Button } from "./Button"

interface OpenProps{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface InputProps{
    placeholder: string
}

const InputData = (prop: InputProps) => {
    return <input type="text" placeholder={`${prop.placeholder}`} className="bg-white shadow p-2 rounded-sm mt-5"/>
}

export const ContentModel = (prop: OpenProps) => {
    return <div>
        {prop.open ? <div className="w-screen h-screen fixed bg-slate-500/70 top-0 left-0 z-10 flex justify-center items-center">
            <div className="bg-white text-blacks p-5 rounded-lg">
                <div className="flex justify-end pb-2">
                    <div onClick={() => {prop.setOpen(false)}} className="cursor-pointer">
                        <CloseIcon size="lg"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <InputData placeholder="type"/>
                    <InputData placeholder="name"/>
                </div>
                <div className="flex justify-center items-center pt-5">
                    <Button variant="Primary" size="lg" text="Submit" onClick={() => {}} fullWidth="yes"/>
                </div>
            </div>
        </div>:null}
    </div>
}