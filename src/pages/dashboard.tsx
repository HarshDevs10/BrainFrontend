import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { ContentModel } from "../components/ContentModel"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { Sidebar } from "../components/SideBar"

export const DashBoardPage = () => {
  const [Open, setOpen] = useState(false)

  return <div>
    <div> 
      <Sidebar/>
      <div className="pl-5 ml-72 pr-3 bg-[#F4F4F4]">
        <ContentModel open={Open} setOpen={setOpen}/>
        <div className="flex justify-end-safe gap-4 pt-5 pb-9">
          <Button variant="Secondary" fullWidth="no" size="lg" text="Share Brain" onClick={() => {}} stratIcon={<ShareIcon size="lg"/>}/>
          <Button variant="Primary" fullWidth="no" size="lg" text="Add Content" onClick={() => {setOpen(true)}} stratIcon={<PlusIcon size="lg"/>}/>
        </div>
        <div className="columns-1 justify-center items-start lg:columns-3 sm:columns-2">
          <Card type="tweet" title="jai ho" url="https://x.com/elonmusk/status/1972062352221864408"/>
          <Card type="youtube" title="jai ma kali" url="https://www.youtube.com/watch?v=FIXBYq2htLU"/>
          <Card type="tweet" title="maa ki ang" url="https://x.com/mufaddal_vohra/status/1972369693320360062"/>
          <Card type="youtube" title="kala kaka" url="https://www.youtube.com/watch?v=GiDl3fMPjRs"/>
          <Card type="tweet" title="papa ki pari" url="https://x.com/CryptoUsopp/status/1972308964953276692"/>
          <Card type="youtube" title="clip" url="https://www.youtube.com/watch?v=J64ByukQOn8" />
        </div>
      </div>
    </div>
  </div>
}