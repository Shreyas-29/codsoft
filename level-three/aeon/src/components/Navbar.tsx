import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import { SearchBar } from '.';
import { Icons } from './Icons';
import UserNav from './UserNav';
import { Button } from './ui/Button';

const Navbar = async () => {

    const session = await getAuthSession();

    return (
        <header className='fixed top-0 z-50 w-full px-4 py-3 border-b bg-slate-50 border-neutral-200 md:px-0'>
            <div className='flex items-center justify-between w-full mx-auto max-w-7xl'>
                <div className='flex items-center gap-1'>
                    <Link href='/'>
                        <h1 className='flex items-center gap-1 text-xl font-semibold cursor-pointer md:text-2xl font-heading'>
                            <Icons.icon className='w-8 h-auto pt-1' />
                            <span>
                                Aeon
                            </span>
                        </h1>
                    </Link>
                </div>
               
               <SearchBar />
                
                <div className='flex items-center justify-end gap-5'>
                    {session ? (
                        <div className='flex items-center justify-end gap-4'>
                            <UserNav user={session?.user} />
                        </div>
                    ) : (
                        <div className='items-center justify-center hidden gap-x-4 lg:flex'>
                            <Link href='/p/create'>
                                <Button variant='outline' size='sm'>
                                    Write
                                </Button>
                            </Link>
                            <Link href='/signin'>
                                <Button variant='default' size='sm'>
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Navbar
