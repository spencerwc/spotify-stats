import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const FeatureChart = ({ features }) => {
    const featureData = [
        {
            type: 'acousticness',
            value: features.acousticness
        },
        {
            type: 'danceability',
            value: features.danceability
        },
        {
            type: 'energy',
            value: features.energy
        },
        {
            type: 'instrumentalness',
            value: features.instrumentalness
        },
        {
            type: 'liveness',
            value: features.liveness
        },
        {
            type: 'speechiness',
            value: features.speechiness
        },
        {
            type: 'valence',
            value: features.valence
        },
    ]

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={featureData}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="type" />
                <YAxis dataKey="value" />
                <Tooltip contentStyle={{backgroundColor: '#000'}}/>
                <Bar dataKey="value" fill="var(--green)" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default FeatureChart;