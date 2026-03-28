

export const Pill = ({name}) => {

    return (
        <>
            <div className="max-w-full rounded-3xl border-[0.5px] border-[rgba(239,159,39,0.1)] bg-amber-400/10 px-3 py-1 text-center text-xs text-amber-400 font-mono sm:px-5 sm:text-sm">
                {name}
            </div>
        </>
    )
}
