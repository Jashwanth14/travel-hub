import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import logo from '@assets/logo.png'
import phucmai from '@assets/phucmai.png'
import { UserButton, SignedIn, SignOutButton } from '@clerk/nextjs';
import Logout from '@mui/icons-material/Logout';  // Add this import

const LeftSideBar = () => {
    return (
        <div className='h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-nd:hidden custom-scrollbar'>
            <Link href="/">
                <Image src={logo} alt='logo' width={200} height={200} />
            </Link>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2 items-center text-light-1'>
                    <Link href="/">
                        <Image src={phucmai} alt="profile photo" width={50} height={50} className='rounded-full' />
                    </Link>
                    <p className='text-small-bold'>phucmai</p>
                </div>
                <div className='flex text-light-1 justify-between'>
                    <div className='flex flex-col items-center'>
                        <p className='text-base-bold'>1</p>
                        <p className='text-tiny-medium'>Posts</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-base-bold'>1</p>
                        <p className='text-tiny-medium'>Followers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-base-bold'>1</p>
                        <p className='text-tiny-medium'>Following</p>
                    </div>
                </div>

                <hr/>

                <Menu/>

                <hr/>

                <div className='flex gap-4 items-center'>
                    <UserButton />
                    <p className=' text-light-1 text-body-bold'>Manage Account</p>
                </div>

                <SignedIn>
                    <SignOutButton>
                        <div className='flex cursor-pointer gap-4 item-center'>
                           <Logout sx={{ color: "white", fontSize: "32px" }}/>
                           <p className='text-body-bold text-light-1'>Log Out</p> 
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </div>
    );
};

export default LeftSideBar;