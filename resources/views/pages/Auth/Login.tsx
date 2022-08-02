import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import {useForm} from "react-hook-form";
import {Inertia} from "@inertiajs/inertia";
import MainLayout from "../../Layouts/MainLayout";

const Login = () => {
    const {errors}: any = usePage().props
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        Inertia.post('/login', data);
    }

    return (
        <MainLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="bg-white rounded-md shadow-md rounded md:w-1/4 m-12 shadow-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-auto">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-email">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                id="grid-password" {...register("email", { required: true })}   type="email"
                                placeholder="user@email.com"/>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Password
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                id="grid-password" {...register('password', { required: true})} type="password" name={'password'}
                                placeholder="*********"/>
                        </div>
                    </div>
                    <div className={'container'}>
                        <button className="inline-flex items-center justify-center h-8 px-6 font-medium tracking-wide text-white
                             transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >Log me in
                        </button>
                    </div>
                    <p className={'text-red-900 text-lg'}> {errors.email && errors.email}</p>
                    <p className={'text-red-900 text-lg'}> {errors.password && errors.password}</p>
                </div>
            </form>
        </MainLayout>
    )
}

export default Login;
