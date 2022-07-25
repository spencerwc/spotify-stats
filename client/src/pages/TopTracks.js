import { useState, useEffect } from 'react';
import { getUserTopTracks } from '../utils/spotify';
import Section from '../components/Section';
import RangeButtons from '../components/RangeButtons';
import Tracks from '../components/Tracks';
import Loader from '../components/Loader';

const TopTracks = () => {
    const [topTracks, setTopTracks] = useState(null);
    const [range, setRange] = useState('long_term');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tracks = await getUserTopTracks(range);
                setTopTracks(tracks.data);
            } 
            catch(err) {
                console.error(err);
            }
        }

        fetchData();
    }, [range]);

    return (
        <>
            {topTracks ? (
                <main>
                    <Section title="Top Tracks">
                        <RangeButtons range={range} setRange={setRange} />
                        <Tracks tracks={topTracks.items} />
                    </Section>
                </main>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default TopTracks;