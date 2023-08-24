'use client'

import { signIn } from "next-auth/react"
import axios from "axios"
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from "../hoooks/useRegisterModal"
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../inputs/Input"
import { toast } from 'react-hot-toast'
import Button from "../Button"
import useLoginModal from "../hoooks/useLoginModal"
import { sign } from "crypto"
import { useRouter } from "next/navigation"


const LoginModal = () => {
    const router = useRouter()
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        signIn('credentials', {
            ...data,
            redirect: false
        })
        .then((callback) => {
            setIsLoading(false)

            if(callback?.ok){
                toast.success('Uspešno ste se prijavili.')
                router.refresh()
                loginModal.onClose()
            }
            if(callback?.error){
                toast.error(callback.error)
            }
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-5">
            <Heading
                title="Dobro došli nazad!"
                subtitle="Prijavite se na sopstveni nalog"
            />

            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-3 mt-2">
            <hr />
            <Button
                outline
                label="Nastaviti pomoću Google naloga"
                icon={FcGoogle}
                onClick={() => { }}
            />
            <Button
                outline
                label="Nastaviti pomoću Github naloga"
                icon={BsGithub}
                onClick={() => { }}
            />
            <div
                className="
                text-blue-600
                text-center
                mt-3
                font-light
                "
            >
                <div className="justify-center flex flex-row items-center gap-3">
                    <div>
                        Već imate svoj nalog?
                    </div>
                    <div 
                        onClick={registerModal.onClose}
                        className="text-neutral-700 cursor pointer hover:underline">
                        Prijavite se svojim nalogom
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Prijavi se"
            actionLabel="Nastavi proces"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal