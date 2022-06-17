import React, {useEffect} from "react";
import MainLayout from "../../Layouts/MainLayout";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import {useForm} from "react-hook-form";

const Register = (props: any) => {
    const {errors}: any = usePage().props
    const {register, handleSubmit, watch} = useForm();
    const onSubmit = (data: any) => {
        Inertia.post('/register', data);
    }

    return (
        <MainLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="bg-white rounded-md shadow-md rounded md:w-1/4 m-12 shadow-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2 container mx-auto">
                    <p className={'text-lg mx-auto'}>Register</p>
                    <hr className={'md:mb-5 mb-2'}/>
                    <div className="-mx-3 md:flex md:mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-email">
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                id="grid-password"{...register('name')} type="text" placeholder="Example Name"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex md:mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                id="grid-password" {...register('email')} type="text"
                                placeholder="user@email.com"/>
                            <p className={'text-red-900 text-lg'}> {errors.email && errors.email}</p>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex md:mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Password
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                id="grid-password" {...register('password')} type="password"
                                placeholder="*********"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex md:mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Confirm password
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                id="grid-password" {...register('password_confirmation')} type="password"
                                placeholder="*********"/>
                            <p className={'text-red-900 text-lg'}>{errors.password && errors.password}</p>
                        </div>
                    </div>
                    <div className={'container'}>
                        <button type={'submit'} className="inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white
                             transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >Register now!
                        </button>
                    </div>
                </div>
            </form>
        </MainLayout>
    )
}

export default Register;
