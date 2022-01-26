import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';
import { useSession } from "next-auth/react";

function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-hide'>

            {session &&
                <div>
                    <div className='relative'>
                        <img className='h-14 w-14 rounded-full p-[1.5px] object-contain cursor-pointer' src={session?.user?.image} alt="image" />
                        <div className='absolute bottom-0 -right-0 text-s w-5 h-5 bg-blue-500 border-2 border-gray-50 rounded-full flex items-center justify-center pb-[4px] text-white'>
                            +
                        </div>
                    </div>
                    <p className='text-xs w-14 truncate text-center'>Your Story</p>
                </div>
            }
            {
                suggestions.map((profile) => (
                    <Story
                        key={profile.id}
                        avatar={profile.avatar}
                        username={profile.username}
                    />
                ))
            }
        </div>
    );
}

export default Stories;
