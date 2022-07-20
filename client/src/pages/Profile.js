import { useState, useEffect } from 'react';
import { getUserProfile } from '../utils/spotify';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserProfile();
                setProfile(response.data);
            } 
            catch(err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {profile && (
                <h1>Hi {profile.display_name}</h1>
            )}
        </div>
    );
}

export default Profile;