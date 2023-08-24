'use client'

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


const RegisterModal = () => {

    const registerModal = useRegisterModal();

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('api/register', data)
            .then(() => {
                registerModal.onClose()
            })
            .catch((error) => {
                toast.error('Greška prilikom registracije')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-5">
            <Heading
                title="Putujte sa nama"
                subtitle="Registrujte se ukoliko ne posedujete sopstveni nalog"
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
                id="name"
                label="Name"
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
            isOpen={registerModal.isOpen}
            title="Registruj se"
            actionLabel="Nastavi proces"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal