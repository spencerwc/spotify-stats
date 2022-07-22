import StyledRangeButtons  from '../styles/StyledRangeButtons';

const RangeButtons = ({ range, setRange }) => {
  return (
    <StyledRangeButtons>
        <li>
            <button className={range === 'long_term' ? 'active' : ''} onClick={() => setRange('long_term')}>All Time</button>
        </li>
        <li>
            <button className={range === 'medium_term' ? 'active' : ''} onClick={() => setRange('medium_term')}>Last 6 Months</button>
        </li>
        <li>
            <button className={range === 'short_term' ? 'active' : ''} onClick={() => setRange('short_term')}>Most Recent</button>
        </li>
    </StyledRangeButtons>
  );
};

export default RangeButtons;