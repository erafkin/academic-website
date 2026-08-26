import { albums } from "../data/music.js";

export default function Music() {
    return(
    <div>
        I listen to a lot of music while coding. Here are my current top albums (in no particular order):
         <ul className="item-list">
            {albums.map((album) => {
                return(
                    <li key={album.title}>
                        <h3>{album.title} ({album.year})</h3>
                        <p>{album.artist}</p>
                    </li>
                )
            })}
         </ul>
        
    </div>
    );
    
}