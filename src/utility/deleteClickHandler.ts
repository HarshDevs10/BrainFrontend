import type { cardProps } from "./cardProps"

export const DeleteClickHandler = (prop : cardProps) => {
      prop.setCardsec(prev => prev.filter(card =>
    !(card.type === prop.type &&
      card.title === prop.title &&
      card.url === prop.url)
  ))
}