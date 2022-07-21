import { useState, useEffect } from 'react';
import { getUserProfile } from '../utils/spotify';
import StyledHeader from '../styles/StyledHeader';
import SpotifyIcon from '../images/Spotify_Icon_RGB_Green.png';

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
        <>
            {profile && (
                <>
                    <StyledHeader type="user">
                        <div className="header-inner">
                            <img className="header-img" src={profile.images[0] && profile.images[0].url ? profile.images[0].url : SpotifyIcon} alt="Avatar"/>
                            <div className="header-details">
                                <h1 className="header-name">{profile.display_name}</h1>
                                <p className="header-meta">
                                    <span>
                                        {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </StyledHeader>
                </>
            )}
        </>
  );
};

export default Profile;