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
            <div id={id} className="flex  top-0 left-0 opacity-0 invisible transition-opacity duration-1200 w-full h-screen overflow-hidden">
                <div className="basis-[50%] place-items-center content-center overflow-hidden">
                    {Left}
                </div>
                <div className="basis-[50%] place-items-center content-center overflow-hidden">
                    {Right}
                </div>
            </div>
    )
}