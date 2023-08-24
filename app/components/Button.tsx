'use client'

import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType

}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    icon: Icon,
    small
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled:opacity-60
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-70
                transition
                w-full
                ${outline ? 'bg-white' : 'bg-blue-600'}        
                ${outline ? 'border-black' : 'bg-blue-600'}        
                ${outline ? 'text-black' : 'text-white'}    
                ${small ? 'py-2' : 'py-4'}    
                ${small ? 'text-sm' : 'text-md'}    
                ${small ? 'font-light' : 'font-semibold'}    
                ${small ? 'border-[1px]' : 'border-2'}    
            `}>
            {Icon && (
                <Icon
                    size={20}
                    className="
                        absolute
                        left-3
                        top-5
                    "
                />
            )}
            {label}
        </button>
    )
}

export default Button;