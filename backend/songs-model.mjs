// Models for the song Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unique and specific error message.' });
    } else  {
        console.log('Success: Unique and specific success message.');
    }
});

// SCHEMA: Define the collection's schema.
const songSchema = mongoose.Schema({
	title:    { type: String, required: true },
	minutes:     { type: Number, required: true },
    seconds: { type: Number, required: true },
    artist: { type: String, required: true },
	album: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "songs".
const songs = mongoose.model('Songs', songSchema);


// CREATE model *****************************************
const createSong = async (title, minutes, seconds, artist, album, date) => {
    const song = new songs({ 
        title: title, 
        minutes: minutes,
        seconds: seconds,
        artist: artist, 
        album: album,
        date: date 
    });
    return song.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveSongs = async () => {
    const query = songs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveSongByID = async (_id) => {
    const query = songs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteSongById = async (_id) => {
    const result = await songs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateSong = async (_id, title, minutes, seconds, artist, album, date) => {
    const result = await songs.replaceOne({_id: _id }, {
        title: title,
        minutes: minutes,
        seconds: seconds,
        artist: artist,
        album: album,
        date: date
    });
    return { 
        _id: _id, 
        title: title,
        minutes: minutes,
        seconds: seconds,
        artist: artist,
        album: album,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createSong, retrieveSongs, retrieveSongByID, updateSong, deleteSongById }