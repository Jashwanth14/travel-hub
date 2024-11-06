"use client"

import React, { useState } from 'react';
import { Add, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs"; // Assuming you are using Clerk for authentication
import Logout from "@mui/icons-material/Logout"; // Importing the Logout icon from MUI icons
import Image from "next/image"; // For optimized image rendering in Next.js
import Link from "next/link"; // For client-side navigation in Next.js
import phucmai from '@assets/phucmai.png'


const TopBar = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    return (
        <div className='flex justify-between items-center mt-6'>
            <div className='relative'>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search posts, people, ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Search className="search-icon" onClick={() => { }} />
            </div>
            <button
                className="create-post-btn"
                onClick={() => router.push("/create-post")}
            >
                <Add /> <p>Create A Post</p>
            </button>
            <div className="flex gap-3">
                <SignedIn>
                    <SignOutButton>
                        <div className='flex cursor-pointer item-center md:hiddden'>
                            <Logout sx={{ color: "white", fontSize: "32px" }} />
                        </div>
                    </SignOutButton>
                </SignedIn>

                <Link href="/">
                    <Image
                        src={phucmai}
                        alt="profile photo"
                        width={50}
                        height={50}
                        className="rounded-full md:hidden"
                    />
                </Link>
            </div>
        </div>
    )
}

export default TopBar