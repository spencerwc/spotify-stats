import StyledList from '../styles/StyledList';

const Artists = ({ artists }) => {
    return (
        <> 
            {artists && artists.length > 0 ? (
                <StyledList type="artist">
                    {artists.map((artist, index) => (
                        <li key={index} className="item">
                            <div className="item-inner">
                                {artist.images[0] && (
                                    <div className="item-image">
                                        <img src={artist.images[0].url} alt={artist.name} />    
                                    </div>
                                )}
                                <h3 className="item-name">{artist.name}</h3>
                            </div>
                        </li>
                    ))}
                </StyledList>
            ) : (
                <p>No artists available.</p>
            )}
        </>
    )
}

export default Artists;