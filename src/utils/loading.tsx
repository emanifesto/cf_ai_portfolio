export function LoadingImage( {image}: {image?: any}) {
    return (
        <div className={`rounded-xl overflow-hidden aspect-video max-h-[30vh] lg:max-h-screen w-[80%] sm:w-[50%] lg:w-[75%] bg-black text-white text-2xl lg:text-4xl place-items-center content-center ${!image && "animate-pulse"}`}>
            {image ?
            image
            : <div className="animate-type py-2 max-w-fit overflow-hidden whitespace-nowrap min-h-fit border-r-2 border-white ease-in-out"><p>Generating image...</p></div>}
        </div>
    )
}