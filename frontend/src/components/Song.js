import React from 'react';

import { TiDelete } from "react-icons/ti";
import { RiEdit2Fill } from "react-icons/ri";


function Song({ song, onEdit, onDelete }) {
    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.minutes} minutes</td>
            <td>{song.seconds} seconds</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.date.slice(0, 10)}</td>

            <td><TiDelete onClick={() => onDelete(song._id)} /></td>
            <td><RiEdit2Fill onClick={() => onEdit(song)} /></td>
        </tr>
    );
}

export default Song;