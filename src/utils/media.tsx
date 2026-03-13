export function MediaContainer( {image}: {image?: string}) {
    return (
        <div className={`rounded-xl overflow-hidden aspect-video max-h-[90%] max-w-[90%] h-[65%] lg:h-fit lg:w-[80%] bg-black text-white text-2xl lg:text-4xl place-items-center content-center ${!image && "animate-pulse"}`}>
            {image ?
            <img src={image} />
            : <div className="animate-type py-2 max-w-fit overflow-hidden whitespace-nowrap min-h-fit border-r-2 border-white ease-in-out"><p>Generating image...</p></div>}
        </div>
    )
}