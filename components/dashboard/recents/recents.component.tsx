import React from 'react'
import RecentCard from './recentCard'

export type roomProps = {
    name: string;
    createdAt: Date;
    preview: string;
    totalMembers: number;
    id: number;
}
const Recents = () => {
    const coderooms:Array<roomProps> = [
        {
            name: "Sample",
            createdAt: new Date(),
            preview: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fHww&w=1000&q=80",
            totalMembers: 20,
            id:1
        },
        {
            name: "Sample",
            createdAt: new Date(),
            preview: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fHww&w=1000&q=80",
            totalMembers: 20,
            id:2
        },
        {
            name: "Sample",
            createdAt: new Date(),
            preview: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fHww&w=1000&q=80",
            totalMembers: 20,
            id:3
        }
    ]
    return (
        <div className='px-4'>
            <h2 className='text-white text-xl'>Your recent coderooms </h2>
            <div className='mt-3 grid md:grid-cols-3 sm:grid-cols-2 gap-2 w-11/12'>
                {
                    coderooms.map((room) => {
                        return <RecentCard key={room.id} data={room} />
                    })
                }
            </div>
        </div>
    )
}

export default Recents