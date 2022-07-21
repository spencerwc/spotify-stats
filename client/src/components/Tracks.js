import StyledList from "../styles/StyledList";

const Tracks = ({ tracks }) => {
    return (
        <> 
            {tracks && tracks.length > 0 ? (
                <StyledList type="track">
                    {tracks.map((track, index) => (
                        <li key={index} className="item">
                            <div className="item-inner">
                                {track.album.images[0] && (
                                    <div className="item-image">
                                        <img src={track.album.images[0].url} alt={track.name} />    
                                    </div>
                                )}
                                <h3 className="item-name">{track.name}</h3>
                            </div>
                        </li>
                    ))}
                </StyledList>
            ) : (
                <p>No tracks available.</p>
            )}
        </>
    )
}

export default Tracks;