// Controllers for the song Collection

import 'dotenv/config';
import express from 'express';
import * as songs from './songs-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/songs', (req,res) => { 
    songs.createSong(
        req.body.title, 
        req.body.minutes,
        req.body.seconds,
        req.body.artist, 
        req.body.album,
        req.body.date
        )
        .then(song => {
            console.log(`"${song.title}" was added to the collection.`);
            res.status(201).json(song);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to add song to the collection due to client error. Please be sure to define each required property of the song.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/songs', (req, res) => {
    songs.retrieveSongs()
        .then(songs => { 
            if (songs !== null) {
                console.log(`All songs were retrieved from the collection.`);
                res.json(songs);
            } else {
                res.status(404).json({ Error: 'Failed to retrieve songs from the collection due to client error. Please enter a valid URL.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve songs from the collection due to client error. Please enter a valid URL.' });
        });
});


// RETRIEVE by ID controller
app.get('/songs/:_id', (req, res) => {
    songs.retrieveSongByID(req.params._id)
    .then(song => { 
        if (song !== null) {
            console.log(`"${song.title}" was retrieved, based on its ID.`);
            res.json(song);
        } else {
            res.status(404).json({ Error: 'Failed to retrieve song due to client error. Please enter a valid URL.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve song due to client error. Please enter a valid song ID.' });
    });

});


// UPDATE controller ************************************
app.put('/songs/:_id', (req, res) => {
    songs.updateSong(
        req.params._id, 
        req.body.title, 
        req.body.minutes,
        req.body.seconds,
        req.body.artist, 
        req.body.album,
        req.body.date
    )
    .then(song => {
        console.log(`"${song.title}" was updated.`);
        res.json(song);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update song. Please enter a valid song ID.' });
    });
});


// DELETE Controller ******************************
app.delete('/songs/:_id', (req, res) => {
    songs.deleteSongById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} song was deleted.`);
                res.status(200).send({ Success: 'Song was successfully deleted from the collection.' });
            } else {
                res.status(404).json({ Error: 'Failed to delete song from the colllection. Please enter a valid URL.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete song from the collection. Please enter a valid song ID.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});