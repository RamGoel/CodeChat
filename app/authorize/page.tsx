'use client';
import Loader from '@/components/common/loader/loader.component';
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import API from '@/services/api';
import { v4 as uuidv4 } from 'uuid';
import { redirect, useRouter } from 'next/navigation';
const Page = () => {
    const { data: session } = useSession();
    const [userData, setUserData] = useState(null);
    const splittedImage: Array<string> | undefined = session?.user?.image?.split('/')
    const userId = splittedImage?.[splittedImage?.length - 1]?.split('?')[0]
    const router = useRouter();
    
    useEffect(() => {
        const fetchAndStoreUser = () => {
            let data={};
            axios.get(`https://api.github.com/user/${userId}`).then(res => {
                data = {
                    id: res.data.id,
                    name: res.data.name,
                    image: res.data.image,
                    githubData: res.data
                }
            }).catch(() => {
                data = {
                    id: uuidv4(),
                    name: session?.user?.name,
                    image: session?.user?.image,
                    githubData: session?.user
                }
            }).finally(() => {
                API.post('/user', data).then(res => {
                    router.push('/dashboard')
                }).catch(err => {
                    console.log(err)
                    router.back()
                })
            })


            
        }

            
        fetchAndStoreUser(); 
    },[session, userId])

    if (!userData) {
        return <Loader />
    }

    return (
        <div className=' bg-white'>
            {JSON.stringify(userData ?? userId)}
        </div>
    )
}

export default Page