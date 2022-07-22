import { useState, useEffect } from 'react';
import { getUserTopAritsts } from '../utils/spotify';
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
                const artists = await getUserTopAritsts(range);
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
                <main style={{padding: '55px 0'}}>
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