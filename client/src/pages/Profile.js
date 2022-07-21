import { useState, useEffect } from 'react';
import { getUserProfile, getUserPlaylists, getUserTopAritsts, getUserTopTracks } from '../utils/spotify';
import StyledHeader from '../styles/StyledHeader';
import SpotifyIcon from '../images/Spotify_Icon_RGB_Green.png';
import Section from '../components/Section';
import Artists from '../components/Artists';
import Tracks from '../components/Tracks';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUserProfile();
                setProfile(user.data);

                const playlists = await getUserPlaylists();
                setPlaylists(playlists.data);

                const artists = await getUserTopAritsts();
                setTopArtists(artists.data);

                const tracks = await getUserTopTracks();
                setTopTracks(tracks.data);
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
                                    {playlists && (
                                        <span>{playlists.total} Playlist{playlists.total > 1 && 's'}</span>
                                    )}
                                    <span>
                                        {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </StyledHeader>
                </>
            )}

            {topArtists && (
                <main>
                    <Section title="Top Artists" seeAllLink="/artists">
                        <Artists artists={topArtists.items.slice(0, 5)} />
                    </Section>
                </main>
            )}

            {topTracks && (
                <main>
                    <Section title="Top Tracks" seeAllLink="/tracks">
                        <Tracks tracks={topTracks.items.slice(0, 5)} />
                    </Section>
                </main>
            )}
        </>
    );
};

export default Profile;