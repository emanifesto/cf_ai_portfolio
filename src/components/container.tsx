import type { ReactNode } from "react"

export default function OuterContainer({ children }: { children: ReactNode }) {
    return (
        <div id={'outer-container'} className="h-[699vh]">
            {children}
        </div>
    )
}

export function InnerContainer({view, id, Left, Right }: {view: string, id: string, Left: ReactNode, Right: ReactNode }) {
    return (
        <div id={id} className={`${view !== id && "opacity-0 invisible"} flex sticky flex-col-reverse lg:flex-row top-0 left-0 transition-opacity duration-800 w-full h-screen overflow-hidden`}>
            <div className="basis-auto lg:basis-[50%] pb-[5vh] lg:pb-0 min-h-[50vh] lg:min-h-0 place-items-center content-center">
                {Left}
            </div>
            <div className="basis-auto lg:basis-[50%] pt-[5vh] lg:pt-0 min-h-[50vh] lg:min-h-0 place-items-center content-center">
                {Right}
            </div>
        </div>
    )
}