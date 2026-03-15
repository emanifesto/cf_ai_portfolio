export function MediaContainer( {image, video, autoplay, text}: {image?: string, video?: string, autoplay?: boolean, text?: string}) {
    let media
    if (image)
        media = <img src={image} />
    if (video){
        media = autoplay
        ? <video autoPlay controls={true} loop src={video} />
        : <video controls={true} src={video} />
    }

    return (
        <div className={`rounded-xl overflow-hidden aspect-video max-h-[90%] max-w-[90%] h-[65%] lg:h-fit lg:w-[80%] bg-black content-center ${(!image && !video) && "animate-pulse place-items-center"}`}>
            {
                (!media) ?
                <div className="animate-type py-2 max-w-fit overflow-hidden whitespace-nowrap min-h-fit border-r-2 border-white ease-in-out text-white text-3xl sm:text-4xl"><p>{text}</p></div>
                : media
            }
        </div>
    )
}

export function MediaSlider({media}: {media: string[]}){
    return(
        <div className="rounded-xl relative overflow-hidden aspect-video max-h-[90%] max-w-[90%] h-[65%] lg:h-fit lg:w-[80%] bg-black place-items-center content-center">
            <div className="paused animate-slider no-scrollbar flex gap-3 aspect-video h-[95%] place-items-center content-center">
                <img src={media[0]} />
                <img src={media[1]} />
                <img src={media[2]} />
                <video controls={true} src={media[3]} />
            </div>
        </div>
    )
}