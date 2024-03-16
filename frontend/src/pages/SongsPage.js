import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SongList from '../components/SongList';
import { Link } from 'react-router-dom';

function SongsPage({ setSong }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [songs, setSongs] = useState([]);

    // RETRIEVE the entire list of songs
    const loadSongs = async () => {
        const response = await fetch('/songs');
        const songs = await response.json();
        setSongs(songs);
    } 
    

    // UPDATE a single song
    const onEditSong = async song => {
        setSong(song);
        redirect("/update");
    }


    // DELETE a single song  
    const onDeleteSong = async _id => {
        const response = await fetch(`/songs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/songs');
            const songs = await getResponse.json();
            setSongs(songs);
        } else {
            console.error(`There was an error while trying to delete the song ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the songs
    useEffect(() => {
        loadSongs();
    }, []);

    // DISPLAY the songs
    return (
        <>
            <h2>Playlist</h2>
            <p>Welcome to your playlist! Feel free to add, edit, or delete songs from your playlist.</p>
            <Link to="/create">Add Song</Link>
            <SongList 
                songs={songs} 
                onEdit={onEditSong} 
                onDelete={onDeleteSong} 
            />
        </>
    );
}

export default SongsPage;