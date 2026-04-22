import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { ContentModel } from "../components/ContentModel"
import { PlusIcon } from "../icons/plusIcon"
import { Sidebar } from "../components/SideBar"
import { type cardProps } from "../utility/cardProps"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const DashBoardPage = () => {
  const [Open, setOpen] = useState(false)
  const [Cardsec, setCardsec] = useState<cardProps[]>([])
  const [AllCard, setAllCard] = useState<cardProps[]>([])
  const [searchTags, setsearchTags] = useState("")
  const [noResult, setNoResult] = useState(false);

useEffect(() => {
  axios.get(`${BACKEND_URL}/api/v1/content`, {
    withCredentials: true
  }).then((res) => {
    console.log(res.data.content);
 const format = res.data.content.map((item: any) => ({
 
  type: item.type,
  title: item.title,
  url: item.url,
  tags: Array.isArray(item.tags)
    ? item.tags.map((t: any) =>
        typeof t === "string"
          ? t
          : t.title || t.name || t.tag || ""
      )
    : item.tags
    ? [item.tags]
    : [],
  setCardsec: setCardsec  
}))
    
    setCardsec(format)
    setAllCard(format)
  })

}, [])
useEffect(() => {
  if (!searchTags.trim()) {
    setCardsec(AllCard);
    setNoResult(false);
  }
}, [searchTags]);

const handleSearch = () => {
  const tagsArray = searchTags
    .toLowerCase()
    .split(",")
    .map(tag => tag.trim());

  const filtered = AllCard.filter((item: any) =>
    tagsArray.every(tag =>
      item.tags?.some((t: string) =>
        t.toLowerCase().includes(tag)
      )
    )
  );

  if (filtered.length === 0) {
    setNoResult(true);     
    setCardsec([]);         
  } else {
    setNoResult(false);     
    setCardsec(filtered);
  }
};
  return <div>
    <div> 
      <Sidebar AllCard={AllCard} setCardsec={setCardsec}/>
      <div className="pl-5 ml-72 pr-3 min-h-screen bg-[#F4F4F4]">
        <ContentModel open={Open} setOpen={setOpen} setCardsec={setCardsec}/>
        <div className="flex justify-between items-center gap-4 pt-5 pb-9">
          <div className="flex gap-3 pt-5 items-center">
              <div className="flex gap-3 items-center">
                <div className="relative">
                <input
                  type="text"
                  placeholder="Search by tags (ai, tech)"
                  value={searchTags}
                  onChange={(e) => setsearchTags(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  className="border p-2 rounded w-64 pr-10"
                />

                {searchTags && (
                  <span
                    onClick={() => {
                      setsearchTags("");
                      setCardsec(AllCard);
                      setNoResult(false);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
                  >
                    ✕
                  </span>
                )}
              </div>

              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Search
              </button>
            </div>
          </div>
          {/*<Button variant="Secondary" fullWidth="no" size="lg" text="Share Brain" onClick={() => {}} stratIcon={<ShareIcon size="lg"/>}/>*/}
          <div className="flex justify-end-safe gap-4 pt-5 pb-9">
            <Button variant="Primary" fullWidth="no" size="lg" text="Add Content" onClick={() => {setOpen(true)}} stratIcon={<PlusIcon size="lg"/>}/>
          </div>
          {/*<Button variant="Primary" fullWidth="no" size="lg" text="Add Content" onClick={() => {setOpen(true)}} stratIcon={<PlusIcon size="lg"/>}/> */}
        </div>
        {noResult ? (
  <div className="text-center text-gray-500 mt-10 text-lg">
    No results found for "{searchTags}"
  </div>
) : (
  <div className="columns-1 justify-center items-start lg:columns-3 sm:columns-2 h-full">
    {Cardsec.map((item, index) => (
      <Card
        key={index}
        type={item.type}
        title={item.title}
        url={item.url}
        setCardsec={item.setCardsec}
      />
    ))}
  </div>
)}
      </div>
    </div>
  </div>
}