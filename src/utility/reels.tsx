interface InstagramProps {
    url?: string
}

export const Reeling = (prop: InstagramProps) => {
    if (!prop.url) return null;

    // Already embed link
    if (prop.url.includes("embed")) {

        return (
            <iframe
                className="w-full aspect-square rounded-xl"
                src={prop.url}
                allowFullScreen
            ></iframe>
        );
    }

    let id = "";

    if (prop.url.includes("/reel/")) {
        const list = prop.url.split("/reel/");
        id = list[list.length - 1].split("/")[0];
    }
    else if (prop.url.includes("/reels/")){
        const list = prop.url.split("/reels/");
        id = list[list.length - 1].split("/")[0];
    }
    else if (prop.url.includes("/p/")) {
        const list = prop.url.split("/p/");
        id = list[list.length - 1].split("/")[0];
    }

    if (!id) return null;

    return (
        <iframe
            className="w-full aspect-[9/16] rounded-xl border-none"
            src={`https://www.instagram.com/reel/${id}/embed`}
            allowFullScreen
        ></iframe>
    );
}