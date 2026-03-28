
export const Card = ({className = "", color , children}) => {

    return (
        <div className={`${className} ${color === "yellow" && "border-[rgba(239,159,39,0.1)]"} z-1000 w-full rounded-xl border bg-[#13121a] px-4 py-5 font-mono sm:px-6 sm:py-6 md:px-9 md:py-7 ${color === "red" && "border-red-500/20"} ${color === "green" && "border-lime-600/30"}` }>
            {children}
        </div>
    )
}
