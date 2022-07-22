import { useState, useEffect } from 'react';
import { getUserTopAritsts } from '../utils/spotify';
import Section from '../components/Section';
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
            <ul>
                <li>
                    <button className={range === 'long_term' ? 'active' : ''} onClick={() => setRange('long_term')}>All Time</button>
                </li>
                <li>
                    <button className={range === 'medium_term' ? 'active' : ''} onClick={() => setRange('medium_term')}>Last 6 Months</button>
                </li>
                <li>
                    <button className={range === 'short_term' ? 'active' : ''} onClick={() => setRange('short_term')}>Most Recent</button>
                </li>
            </ul>
            {topArtists && (
                <Section title="Top Artists">
                    <Artists artists={topArtists.items.slice(0, 10)} />
                </Section>
            )}
        </main>
    );
}

export default TopArtists;