import type { ReactNode } from "react"

export default function OuterContainer({ children }: { children: ReactNode }) {
    return (
        <div id={'outer-container'} className="h-[699vh]">
            {children}
        </div>
    )
}

export function InnerContainer({ id, Left, Right }: { id: string, Left: ReactNode, Right: ReactNode }) {
    return (
        <div id={id} className="flex flex-col-reverse lg:flex-row top-0 left-0 opacity-0 invisible transition-opacity duration-1200 w-full h-screen overflow-hidden">
            <div className="basis-auto lg:basis-[50%] pb-[5vh] lg:pb-0 min-h-[50vh] lg:min-h-0 place-items-center content-center">
                {Left}
            </div>
            <div className="basis-auto lg:basis-[50%] pt-[5vh] lg:pt-0 min-h-[50vh] lg:min-h-0 place-items-center content-center">
                {Right}
            </div>
        </div>
    )
}