import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditSongPageTable = ({ songToEdit }) => {
 
    const [title, setTitle]       = useState(songToEdit.title);
    const [minutes, setMinutes]         = useState(songToEdit.minutes);
    const [seconds, setSeconds] = useState(songToEdit.seconds);
    const [artist, setArtist]     = useState(songToEdit.artist)
    const [album, setAlbum]       = useState(songToEdit.album)
    const [date, setDate]         = useState(songToEdit.date)
    
    const redirect = useNavigate();

    const editSong = async () => {
        const response = await fetch(`/songs/${songToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                minutes: minutes, 
                seconds: seconds,
                artist: artist,
                album: album,
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Currently editing information about the song`);
        } else {
            const errMessage = await response.json();
            alert(`There was an error while trying to edit the song: Error ${response.status}. ${errMessage.Error}`);
        }
        redirect("/playlist");
    }

    return (
        <>
        <article>
            <h2>Edit a song</h2>
            <p>Edit any information about the song in your playlist.</p>
            <table id="songs">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Minutes</th>
                        <th>Seconds</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title">Song title</label>
                        <input
                            type="text"
                            placeholder="Title of the song"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="minutes">Minutes</label>
                        <input
                            type="number"
                            value={minutes}
                            placeholder="Minutes of the song"
                            onChange={e => setMinutes(e.target.value)} 
                            id="minutes" />
                    </td>

                    <td><label for="seconds">Seconds</label>
                        <input
                            type="number"
                            placeholder="Seconds of the song"
                            value={seconds}
                            onChange={e => setSeconds(e.target.value)} 
                            id="seconds" />
                    </td>

                    <td><label for="artist">Artist</label>
                        <input
                            type="text"
                            placeholder="Artist of the song"
                            value={artist}
                            onChange={e => setArtist(e.target.value)}
                            id="artist" />
                    </td>

                    <td><label for="album">Album</label>
                        <input
                            type="text"
                            placeholder="Album"
                            value={album}
                            onChange={e => setAlbum(e.target.value)}
                            id="album" />
                    </td>

                    <td><label for="date">Release Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editSong}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditSongPageTable;