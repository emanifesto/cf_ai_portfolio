export default function OuterContainer({children}: {children: React.ReactElement}){
    return(
        <div className="h-[200vh]">
            {children}
        </div>
    )
}