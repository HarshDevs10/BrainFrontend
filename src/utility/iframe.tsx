export const Iframe = ({ id }: { id: string }) => {
    return <iframe className="aspect-video justify-center"
            src={`https://www.youtube.com/embed/${id}`} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}