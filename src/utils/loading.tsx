export function LoadingImage(){
    return(
        <div className="rounded-xl overflow-hidden aspect-video w-[75%] bg-black text-white text-4xl place-items-center content-center animate-pulse">
            <div className="animate-type py-2 max-w-fit overflow-hidden whitespace-nowrap min-h-fit border-r-2 border-white ease-in-out"><p>Generating image...</p></div>
        </div>
    )
}