import type React from "react"
import { CloseIcon } from "../icons/closeIcon"
import { Button } from "./Button"
import { InputData } from "../utility/inputdata"
import { useState } from "react"
import { YoutubeClickHandler } from "../utility/youtubeClickHandler"
import { TweetClickHandler } from "../utility/tweetClickHandler"

interface OpenProps{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const ContentModel = (prop: OpenProps) => {
    const [type, setType] = useState<string>("none")

    return <div>
        {prop.open ? <div className="w-screen h-screen fixed bg-slate-500/70 top-0 left-0 z-10 flex justify-center items-center">
            <div className="bg-white text-blacks p-5 rounded-lg">
                <div className="flex justify-between items-center pb-2">
                    <span className="text-slate-700 text-xl font-semibold underline decoration-dotted decoration-sky-500 underline-offset-2">Adding Content</span>
                    <span onClick={() => {prop.setOpen(false)}} className="cursor-pointer">
                        <CloseIcon size="lg"/>
                    </span>
                </div>
                <div className="flex flex-col">
                    <InputData placeholder="Title"/>
                    <InputData placeholder="URL"/>
                    <InputData placeholder="Tag"/>
                </div>
                <div className="flex justify-around items-center pt-5">
                    {type === "none"? <>
                        <Button variant="Primary" size="md" text="Youtube" fullWidth="no" onClick={() => {YoutubeClickHandler({type, setType})}}/>
                        <Button variant="Secondary" size="md" text="Tweet"fullWidth="no"onClick={() => {TweetClickHandler({type, setType})}}/>
                    </>: type === "youtube"? 
                        <Button variant="Primary" size="md" text="Youtube" fullWidth="no" onClick={() => {YoutubeClickHandler({type, setType})}}/>:
                        <Button variant="Secondary" size="md" text="Tweet" fullWidth="no" onClick={() => {TweetClickHandler({type, setType})}}/>}
                </div>
                <div className="flex justify-center items-center pt-8">
                    <Button variant="Primary" size="lg" text="Submit" onClick={() => {}} fullWidth="yes"/>
                </div>
            </div>
        </div>:null}
    </div>
}
