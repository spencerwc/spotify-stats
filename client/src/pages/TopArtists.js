import { useState, useEffect } from 'react';
import { getUserTopArtists } from '../utils/spotify';
import Section from '../components/Section';
import RangeButtons from '../components/RangeButtons';
import Artists from '../components/Artists';
import Loader from '../components/Loader';

const TopArtists = () => {
    const [topArtists, setTopArtists] = useState(null);
    const [range, setRange] = useState('long_term');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artists = await getUserTopArtists(range);
                setTopArtists(artists.data);
            } 
            catch(err) {
                console.error(err);
            }
        }

        fetchData();
    }, [range]);

    return (
        <>
            {topArtists ? (
                <main>
                    <Section title="Top Artists">
                        <RangeButtons range={range} setRange={setRange} />
                        <Artists artists={topArtists.items} />
                    </Section>
                </main>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default TopArtists;