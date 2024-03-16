import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddSongPageTable = () => {

    const [title, setTitle]       = useState('');
    const [minutes, setMinutes]         = useState('');
    const [seconds, setSeconds] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addSong = async () => {
        const newSong = { title, minutes, seconds, artist, album, date };
        const response = await fetch('/songs', {
            method: 'post',
            body: JSON.stringify(newSong),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Currently adding song to the playlist`);
        } else {
            alert(`Error while trying to add song to the playlist: Error ${response.status}`);
        }
        redirect("/playlist");
    };


    return (
        <>
        <article>
            <h2>Add a song</h2>
            <p>Fill in the information about the song that you're adding to your playlist.</p>
            
            <table id="songs">
                <caption>Which song are you adding?</caption>
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
                            onClick={addSong}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddSongPageTable;