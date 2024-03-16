import React from 'react';
import Song from './Song';


function SongList({ songs, onDelete, onEdit }) {
    return (
        <table id="songs">
            <caption>Add and Edit Songs</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Miutes</th>
                    <th>Seconds</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, i) => 
                    <Song 
                        song={song} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default SongList;
