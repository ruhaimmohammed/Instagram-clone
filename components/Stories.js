import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-hide'>
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
