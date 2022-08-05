import { Link } from "react-router-dom";
import StyledList from "../styles/StyledList";

const Tracks = ({ tracks }) => {
    return (
        <> 
            {tracks && tracks.length > 0 ? (
                <StyledList type="track">
                    {tracks.map((track, index) => (
                        <li key={index} className="item">
                            <Link to={`/tracks/${track.id}`} >
                                <div className="item-inner">
                                    {track.album.images[0] && (
                                        <div className="item-image">
                                            <img src={track.album.images[2].url} alt={track.name} />    
                                        </div>
                                    )}
                                    <div className="item-data">
                                        <strong className="item-name">{track.name}</strong>
                                        <span className="item-meta">{track.artists[0].name} - {track.album.name.slice(0, 45)} {track.album.name.length > 45 && '...'}</span>
                                    </div>
                                </div>
                            </Link>
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