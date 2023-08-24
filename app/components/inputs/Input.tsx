'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { BiEuro } from "react-icons/bi"

interface InputProps {
    id: string
    label: string
    type?: string
    disabled?: boolean
    formatPrice?: boolean
    required?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "tekst",
    disabled,
    formatPrice,
    register,
    required,
    errors
}) => {
    return(
        <div className="w-full relative">
            {formatPrice && (
                <BiEuro 
                    size={20}
                    className="
                        text-neutral-900
                        absolute
                        top-7
                        left-3
                    "
                />
            )}
            <input 
                id={id}
                disabled={disabled}
                { ...register(id, { required })}
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    p-6
                    pt-8
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-80
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-8' : 'pl-5'}
                    ${errors[id] ? 'border-blue-600' : 'border-neutral-400'}
                    ${errors[id] ? 'focus:border-red-600' : 'focus:border-red'}
                `}
            />
            <label
                className={`
                    absoulte
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]   
                    ${formatPrice ? 'left-8' : 'left-5'}
                    peer-placeholder-shown:scale-100
                    ${errors[id] ? 'tex-blue-600' : 'text-black-500'}
                `}
            >
                {label}
            </label>
        </div>
    )
}

export default Input