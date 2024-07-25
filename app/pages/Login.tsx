
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../../../public/logo.png';
import { useAuth } from '@/context/AuthContext';


const Login = () => {
    const { logIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await logIn(email, password);
            router.push('/center');
        } catch (err) {
            setError('Failed to log in. Please check your email and password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='mx-auto mt-10 w-[480px] h-[573px]'>
                <h1 className="font-bold text-[40px] flex items-center pl-[120px]">
                    <Image src={Logo} alt="logo" width={40} height={40} />
                    <span>devlinks</span>
                </h1>
                <div className='w-[476px] h-[530px] mt-7 pb-[30px] bg-white'>
                    <div className='max-w-[400px] mx-auto py-16'>
                        <h1 className='text-4xl font-bold'>Login</h1>
                        <p className="text-[#737373] py-4">Add your details below to get back into the app</p>
                        <form className='w-full flex flex-col pt-7' onSubmit={handleSubmit}>
                            <p>Email address</p>
                            <input
                                className='my-2 border rounded-md w-[396px] h-[48px]'
                                type='email'
                                placeholder='e.g. alex@email.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <p className="mt-5">Password</p>
                            <input
                                className='my-2 border rounded-md w-[396px] h-[48px]'
                                type='password'
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                className='bg-[#633CFF] w-[396px] h-[48px] py-3 my-6 rounded-md font-bold text-white'
                                type='submit'
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                            {error && <p className="text-red-500">{error}</p>}
                            <p className="text-center">
                                <span className='text-gray-600'>{"Don't"} have an account?</span>
                                {' '}
                                <Link href='/signup' className="text-[#633CFF]">Create account</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
