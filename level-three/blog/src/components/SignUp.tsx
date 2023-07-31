import Link from 'next/link'
import { Icons } from './Icons'
import UserAuthForm from './UserAuthForm'


const SignUp = () => {
    return (
        <div className='container mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-3 text-center'>
                <Icons.icon className='w-10 h-auto mx-auto' />
                <h1 className='text-2xl font-semibold tracking-tight'>
                    Sign Up to Aeon
                </h1>
                <p className='max-w-xs mx-auto text-sm'>
                    By continuing, you are setting up a Aeon account and agree to our Terms of Service and Privacy Policy.
                </p>

                <UserAuthForm />

                <p className='px-8 text-sm text-center text-zinc-700'>
                    Already a Member?{' '}
                    <Link href='/signin' className='text-sm font-medium transition hover:text-zinc-900'>
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
