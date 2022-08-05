import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtist } from "../utils/spotify";
import styled from "styled-components/macro";
import Loader from "../components/Loader";

const StyledArtistDetails = styled.section`
        padding-top: var(--spacing-sm);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-lg);
        max-width: var(--site-max-width);
        text-align: center;

        strong {
            color: var(--green);
        }

        .artist-image {
            width: 100%;
            max-width: 300px;
            height: 300px;
            margin: 0 auto;
            border-radius: 50%;
            object-fit: cover;

            @media (min-width: 768px) {
                margin: 0;
            }
        }

        .artist-stats {
            display: flex;
            width: 100%;
            max-width: 200px;
            justify-content: space-between;
        }

        .stat-container {
            text-align: center;
        }

        .artist-genre {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                display: inline-block;
            }
        }
`;

const Artist = () => {
    const { id } = useParams();
    const [artist, setArtist] = useState(null);


    useEffect(() => {
        const fetchArtistData = async () => {
            const artist = await getArtist(id);
            setArtist(artist.data);
        }
        fetchArtistData();
    }, [id]);

    return (
        <>
            {artist ? (
                <main>
                    <StyledArtistDetails>
                        <img className="artist-image" src={artist.images[1].url} alt={artist.name} />
                        <h1>{artist.name}</h1>
                        <div className="artist-stats">
                            <div className="stat-container">
                                <strong>Followers</strong>
                                <h2>{artist.followers.total.toLocaleString()}</h2>
                            </div>
                            <div className="stat-container">
                                <strong>Popularity</strong>
                                <h2>{artist.popularity}%</h2>
                            </div>
                        </div>

                        {artist.genres.length > 0 && (
                            <div>
                                <strong>Genre</strong>
                                <div>
                                    <h2>{artist.genres[0][0].toUpperCase() + artist.genres[0].slice(1)}</h2>
                                </div>
                            </div>
                        )}
                    </StyledArtistDetails>
                </main> 
                ) : (
                <Loader />
                )
            }
        </>
    );
}

export default Artist;