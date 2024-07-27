

"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '../../public/logo.png';
import { useAuth } from '@/context/AuthContext';

const Signup = () => {
    const { signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            await signUp(email, password);
            router.push('/center'); 
        } catch (err) {
            setError('Failed to create an account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='mx-auto mt-10 w-[480px] h-[709px]'>
                <h1 className="font-bold text-[40px] flex items-center pl-[120px]">
                    <Image src={Logo} alt="logo" width={40} height={40} />
                    <span>devlinks</span>
                </h1>
                <div className='w-[476px] h-[618px] mt-7 pb-[30px] bg-white'>
                    <div className='max-w-[400px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold text-[#333333] font-sans'>Create account</h1>
                        <p className="text-[#737373] py-4">{"Let's"} get you started sharing your links!</p>
                        <form className='w-full flex flex-col pt-7' onSubmit={handleSubmit}>
                            <p className='text-[12px]'>Email address</p>
                            <input
                                className='my-2 border rounded-md w-[396px] h-[48px] hover:border-[#633CFF] duration-200 '
                                type='email'
                                placeholder='e.g. alex@email.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <p className="mt-5 text-[12px]">Create password</p>
                            <input
                                className='my-2 border rounded-md w-[396px] h-[48px] hover:border-[#633CFF]'
                                type='password'
                                placeholder='At least 8 characters'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <p className="mt-5 text-[12px]">Confirm password</p>
                            <input
                                className='my-2 border rounded-md w-[396px] h-[48px] hover:border-[#633CFF]'
                                type='password'
                                placeholder='At least 8 characters'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {error && <p className="text-red-500">{error}</p>}
                            <button
                                className='bg-[#633CFF] w-[396px] h-[48px] py-3 my-6 rounded-md font-bold text-white'
                                type='submit'
                                disabled={loading}
                            >
                                {loading ? 'Creating account...' : 'Create new account'}
                            </button>
                            <p className="text-center">
                                <span className='text-gray-600'>Already have an account?</span>
                                <Link href='/login' className="text-[#633CFF]">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
