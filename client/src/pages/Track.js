import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrack, getTrackAudioFeatures } from "../utils/spotify";
import styled from "styled-components/macro";
import Section from "../components/Section";
import Loader from "../components/Loader";

const StyledTrackDetails = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-md);
        max-width: var(--site-max-width);
        text-align: center;

        @media (min-width: 768px) {
            gap: var(--spacing-xxl);
            text-align: left;
        }

        .album-art {
            width: 100%;
            max-width: 300px;
        }

        .track-artists {
            color: var(--lightgrey);
        }

        .listen-button {
            background-color: var(--green);
            color: var(--black);
            font-family: var(--font-acc);
            font-weight: 700;
            padding: 10px 20px;
            margin: var(--spacing-xl) auto;
            border-radius: 30px;
            display: block;
            width: fit-content;
            
            @media (min-width: 768px) {
                margin: var(--spacing-md) 0;
            }
        }
`;

const Track = () => {
    const { id } = useParams();
    const [track, setTrack] = useState(null);
    const [features, setFeatures] = useState(null);

    useEffect(() => {
        const fetchTrackData = async () => {
            const track = await getTrack(id);
            setTrack(track.data);

            const features = await getTrackAudioFeatures(id);
            setFeatures(features.data);
        }
        fetchTrackData();
    }, [id]);

    return (
        <>
            {track ? (
                <main>
                    <StyledTrackDetails>
                        <img className="album-art" src={track.album.images[0].url} alt="album art" />
                        <div className="track-details">
                            <h1>{track.name}</h1>
                            <h2 className="track-artists">
                                {track.artists.map((artist, index) => index !== track.artists.length - 1 ? `${artist.name}, ` : artist.name)}
                            </h2>
                            <strong>
                                {track.album.name}
                            </strong>
                            <a className="listen-button" href={track.external_urls.spotify} target="_blank" rel="noreferrer">Listen on Spotify</a>
                        </div>
                    </StyledTrackDetails>
                </main> 
                ) : (
                <Loader />
                )
            }
        </>
    );
}

export default Track;