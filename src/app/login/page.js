import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { axiosInstance, setToken } from '/src/app/axios/axiosInstance';
import { useRouter } from 'next/navigation';

export default function page() {
    const router = useRouter();
    const onSubmit = async (values) => {
        try {
            const payload = {
                phone: values.phone,
                password: values.password
            }
            const response = await axiosInstance.post('/api/account/v1/login/', payload);
            setToken(response.data.result.token);
            sessionStorage.setItem('data' + JSON.stringify(response.data.result));
            router.push('/landing')
        } catch (error) {
            console.log(error ? error.response.data : 'Алдаа гарлаа дахин оролдоно уу');
        }
    }
    const form = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema: yup.object({
            phone: yup.string().required('phone required!'),
            password: yup.string().required('password required!')
        }),
        onSubmit,
    });
  
    return (
        <div className="flex min-h-screen items-center justify-center">
        <div className="relative h-[800px] w-[400px] overflow-hidden rounded-2xl bg-[url('/images/Onboard.png')]">
            {/* <div className="h-[300px] w-full bg-[100%] bg-violet-500"></div>
            <div className='h-[550px] w-full bg-[100%] bg-gray-700'></div> */}
            <div className="absolute bottom-0 flex h-4/5 w-full flex-col">
            <form className="space-y-4 px-5 py-5 text-center" onSubmit={form.handleSubmit}>
                <div className="group relative">
                <p className='text-3xl outline-none left-2 flex font-bold mb-8 text-white'>
                    Нэвтрэх
                </p>
                </div>
                <div className="group relative">
                <input type='text' id="phone" name='phone' value={form.values.phone} error={Boolean(form.errors.phone && form.touched.phone)} onChange={form.handleChange} required className="peer h-[60px] w-full rounded-md bg-gray-100 px-4 text-sm outline-none text-gray-700" />
                <label for="phone" className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within: text-slate-700 peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-gray">Утасны дугаар</label>
                </div>
                <div className="group relative">
                <input type="text" id="password" value={form.values.password} error={Boolean(form.errors.password && form.touched.password)} onChange={form.handleChange} required className="peer h-[60px] w-full rounded-md bg-gray-100 px-4 text-sm outline-none text-gray-700" />
                <label for="password" className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within: text-slate-400 peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-gray">Нууц үг</label>
                </div>
                <button className="h-[60px] w-full rounded-md bg-yellow-300 text-gray-700 transition-all duration-300 hover:bg-yellow-300" type='submit' disabled={form.isSubmitting}>{form.isSubmitting ? 'please wait' : 'Нэвтрэх'}</button>
                <a href="#" className="inline-flex !w-auto justify-center text-white underline">Нууц үгээ мартсан уу?</a>
            </form>
                <a href="#" className="border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none">
                <span>
                    <svg className="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                </span>
                <span className="text-sm font-medium text-white">Facebook</span>
                </a>

                <a href="#" className="border-white-500 group m-auto my-0 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none">
                <span>
                    <svg className="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                </span>
                <span className="text-sm font-medium text-white">Google</span>
                </a>
            <p className="gap-2 text-center text-white py-10">
                <a href="#" className="font-semibold text-amber-200 hover:text-blue-800">Бүртгүүлэх</a>
            </p>
            </div>
        </div>
    </div>
    )
}
