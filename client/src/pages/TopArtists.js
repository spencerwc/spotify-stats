import { useState, useEffect } from 'react';
import { getUserTopAritsts } from '../utils/spotify';
import Section from '../components/Section';
import RangeButtons from '../components/RangeButtons';
import Artists from '../components/Artists';

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
        <main>
            <Section title="Top Artists">
            <RangeButtons range={range} setRange={setRange} />
            
            {topArtists && (
                <Artists artists={topArtists.items} />
            )}
            </Section>
        </main>
    );
}

export default TopArtists;