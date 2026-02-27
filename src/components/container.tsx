import type { ReactNode } from "react"

export default function OuterContainer({ children }: { children: ReactNode }) {
    return (
        <div className="h-[600vh]">
            {children}
        </div>
    )
}

export function InnerContainer({ id, Left, Right }: { id: string, Left: ReactNode, Right: ReactNode }) {
    return (
        <div id={id} className="flex w-screen h-screen overflow-hidden">
            <div className="basis-[50%] place-items-center content-center overflow-hidden">
                {Left}
            </div>
            <div className="basis-[50%] place-items-center content-center overflow-hidden">
                {Right}
            </div>
        </div>
    )
}