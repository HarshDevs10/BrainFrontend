import type React from "react"
import { CloseIcon } from "../icons/closeIcon"
import { Button } from "./Button"
import { InputData } from "../utility/inputdata"
import { useRef, useState, type ReactElement } from "react"
import { YoutubeClickHandler } from "../utility/youtubeClickHandler"
import { TweetClickHandler } from "../utility/tweetClickHandler"
import { useNavigate } from "react-router"
import type { cardProps } from "../utility/cardProps"
import { ContentSubmitHandler } from "../utility/ContentSubmitHandler"

interface OpenProps{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setCardsec: React.Dispatch<React.SetStateAction<cardProps[]>>
}


export const ContentModel = (prop: OpenProps) => {
    const [type, setType] = useState<string>("none")
    const [errorMes, setErrorMes] = useState<string | null>(null)
    const TitleRef = useRef<ReactElement>(null)
    const URLRef = useRef<ReactElement>(null)
    const TagRef = useRef<ReactElement>(null)
    const Navigate = useNavigate()

    const setOpen = prop.setOpen
    const setCardsec = prop.setCardsec

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
                    <InputData placeholder="Title" ref={TitleRef}/>
                    <InputData placeholder="URL" ref={URLRef}/>
                    <InputData placeholder="Tag" ref={TagRef}/>
                </div>
                <div className="flex justify-around items-center pt-5">
                    {type === "none"? <>
                        <Button variant="Primary" size="md" text="Youtube" fullWidth="no" onClick={() => {YoutubeClickHandler({type, setType})}}/>
                        <Button variant="Secondary" size="md" text="Tweet"fullWidth="no"onClick={() => {TweetClickHandler({type, setType})}}/>
                    </>: type === "youtube"? 
                        <Button variant="Primary" size="md" text="Youtube" fullWidth="no" onClick={() => {YoutubeClickHandler({type, setType})}}/>:
                        <Button variant="Secondary" size="md" text="Tweet" fullWidth="no" onClick={() => {TweetClickHandler({type, setType})}}/>}
                </div>
            <div className="text-red-800 text-xs pl-10">
                {errorMes? `* ${errorMes}`: null}
            </div>
                <div className="flex justify-center items-center pt-8">
                    <Button variant="Primary" size="lg" text="Submit" onClick={() => {ContentSubmitHandler({
                        TitleRef: TitleRef,
                        URLRef: URLRef,
                        TagRef: TagRef,
                        type: type,
                        setOpen,
                        setError: setErrorMes,
                        setCardsec,
                        Navigate
                    })}} fullWidth="yes"/>
                </div>
            </div>
        </div>:null}
    </div>
}
