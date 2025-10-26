export interface cardProps{
    url: string
    title: string
    type: "youtube" | "tweet"
    setCardsec: React.Dispatch<React.SetStateAction<cardProps[]>>
}