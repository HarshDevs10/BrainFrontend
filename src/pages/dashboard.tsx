import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { ContentModel } from "../components/ContentModel"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { Sidebar } from "../components/SideBar"
import { type cardProps } from "../utility/cardProps"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const DashBoardPage = () => {
  const [Open, setOpen] = useState(false)
  const [Cardsec, setCardsec] = useState<cardProps[]>([])

useEffect(() => {
  axios.get(`${BACKEND_URL}/api/v1/content`, {
    withCredentials: true
  }).then((res) => {
    const format = res.data.content.map((item: any) => ({
      type: item.type,
      title: item.title,
      url: item.url,
      setCardsec: setCardsec
    }))
    setCardsec(format)
  })
}, [])

  return <div>
    <div> 
      <Sidebar/>
      <div className="pl-5 ml-72 pr-3 min-h-screen bg-[#F4F4F4]">
        <ContentModel open={Open} setOpen={setOpen} setCardsec={setCardsec}/>
        <div className="flex justify-end-safe gap-4 pt-5 pb-9">
          <Button variant="Secondary" fullWidth="no" size="lg" text="Share Brain" onClick={() => {}} stratIcon={<ShareIcon size="lg"/>}/>
          <Button variant="Primary" fullWidth="no" size="lg" text="Add Content" onClick={() => {setOpen(true)}} stratIcon={<PlusIcon size="lg"/>}/>
        </div>
        <div className="columns-1 justify-center items-start lg:columns-3 sm:columns-2 h-full">
              {Cardsec.map((item, index) => 
                (<Card key={index}
                  type={item.type} 
                  title={item.title} 
                  url={item.url} 
                  setCardsec={item.setCardsec}/>))}
        </div>
      </div>
    </div>
  </div>
}