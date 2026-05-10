export interface cardProps{
    url: string
    title: string
    type: "youtube" | "tweet" | "reel"
    setCardsec: React.Dispatch<React.SetStateAction<cardProps[]>>
}