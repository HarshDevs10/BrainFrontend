interface ReelHandlerProps {
    type: string
    setType: React.Dispatch<React.SetStateAction<string>>
}

export const ReelClickHandler = (prop: ReelHandlerProps) => {
    if(prop.type === "none"){
        prop.setType("reel")
    }
    else{
        prop.setType("none")
    }
}