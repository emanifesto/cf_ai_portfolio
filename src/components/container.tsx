import type { JSX } from "react"

export default function OuterContainer({children}: {children: React.ReactElement}){
    return(
        <div className="h-[200vh]">
            {children}
        </div>
    )
}

export function InnerContainer({id, Left, Right}: {id: string, Left:JSX.Element, Right:JSX.Element}){
    return(
        <div id={id} className="flex w-screen  gap-[10%] px-10 h-screen">
            <div className="basis-[50%] place-items-center content-center">
                {Left}
            </div>
            <div className="basis-[50%] place-items-center content-center">
                {Right}
            </div>
        </div>
    )
}