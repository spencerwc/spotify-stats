import { useState, useEffect } from 'react';
import { getUserProfile, getUserPlaylists, getUserTopArtists, getUserFollowedArtists, getUserTopTracks } from '../utils/spotify';
import styled from 'styled-components/macro';
import StyledHeader from '../styles/StyledHeader';
import SpotifyLogo from '../images/Spotify_logo.svg';
import Section from '../components/Section';
import Artists from '../components/Artists';
import Tracks from '../components/Tracks';
import Loader from '../components/Loader';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    gap: var(--spacing-md);
    max-width: var(--site-max-width);
    margin: 0 auto;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl);
    }
`;

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUserProfile();
                const following = await getUserFollowedArtists();
                setProfile({...user.data, followingCount: following.data.artists.items.length});
                
                const playlists = await getUserPlaylists();
                setPlaylists(playlists.data);

                const artists = await getUserTopArtists();
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
            {profile ? (
                <main>
                    <StyledHeader type="user">
                        <div className="header-inner">
                            <img className="header-img" src={profile.images[0] && profile.images[0].url ? profile.images[0].url : SpotifyLogo} alt="Avatar"/>
                            <div className="header-details">
                                <h1 className="header-name">{profile.display_name}</h1>
                                <p className="header-meta">
                                    {playlists && (
                                        <span>{playlists.total} Playlist{playlists.total > 1 && 's'}</span>
                                    )}
                                    <span>
                                        {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                                    </span>
                                    <span>
                                        {profile.followingCount ? profile.followingCount : '0'} Following
                                    </span>
                                </p>
                            </div>
                        </div>
                    </StyledHeader>
                    <StyledGrid>
                        {topArtists && (
                            <Section title="Top Artists" seeAllLink="/artists">
                                <Artists artists={topArtists.items.slice(0, 5)} />
                            </Section>
                        )}

                        {topTracks && (
                            <Section title="Top Tracks" seeAllLink="/tracks">
                                <Tracks tracks={topTracks.items.slice(0, 5)} />
                            </Section>
                        )}
                    </StyledGrid>
                </main> 
                ) : (
                <Loader />
                )
            }
        </>
    );
};

export default Profile;