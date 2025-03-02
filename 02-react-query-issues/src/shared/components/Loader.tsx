import { FiRefreshCcw } from "react-icons/fi"

const Loader = ():JSX.Element => {
    return (
        <div className="loading flex items-center justify-center w-full h-[100px]">
            <div className="animate-spin">
                <FiRefreshCcw size={ 30 } />
            </div>
        </div>
    )
}

export { Loader }