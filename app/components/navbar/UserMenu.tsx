'use client'

import { AiOutlineBars } from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '../hoooks/useRegisterModal';
import useLoginModal from '../hoooks/useLoginModal';
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"

interface UserMenuProps {
    currentUser?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {

    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-2">
                <div
                    onClick={() => { }}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-4
                        px-4
                        rounded-full
                        hover:bg-neutral-200
                        transition
                        cursor-pointer                   
                    "
                >
                    Vaša destinacija
                </div>
                <div
                    onClick={toggleOpen}
                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-2
                        cursor-pointer
                        hover:shadow-md
                        transition
                    "
                >
                    <AiOutlineBars />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-11
                        text-sm
                    "
                >
                    <div className=" flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                            <MenuItem
                                onClick={() => {}}
                                label="Moja putovanja" 
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Omiljena putovanja" 
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Rezervisana putovanja" 
                            />
                            <MenuItem
                                onClick={() => {}}
                                label="Poklon putovanja" 
                            />
                            <hr />
                            <MenuItem
                                onClick={() => signOut()}
                                label="Odjavi se" 
                            />
                        </>
                        ) : (
                            <>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label="Prijavi se" 
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label="Registruj se" 
                                />
                            </>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserMenu;