'use client'

import { BiSearchAlt } from 'react-icons/bi'

const Search = () => {
    return (
        <div
            className="
                border-[3px] 
                w-full 
                md:w-auto
                py-3
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
            "
        >
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between               
                "
            >
                <div
                    className="
                        text-sm
                        font-semibold
                        px-7    
                    "
                >
                    Putovanje
                </div>
                <div
                    className="
                        hidden
                        sm:block
                        text-sm
                        font-semibold
                        px-7
                        border-x-[1px]
                        flex-1
                        text-center
                    "
                >
                    Destinacije
                </div>
                <div
                    className="
                        text-sm
                        pl-6
                        pr-2
                        text-gray-500
                        flex
                        flex-row
                        items-center
                        gap-2
                    "
                >
                    <div className="hidden sm:block">Pretraži destinacije</div>
                    <div
                        className="
                            p-2
                            bg-blue-500
                            rounded-full
                            text-white    
                        "
                    >
                        <BiSearchAlt size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;