// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Nav from './components/Navigation';
import './App.css';


import HomePage from './pages/HomePage'
import TopicPage from './pages/TopicPage'

import SongsPage from './pages/SongsPage';

import EditSongPageTable from './pages/EditSongPageTable';
import AddSongPageTable from './pages/AddSongPageTable';

function App() {

  const [song, setSongToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1><img src="android-chrome-192x192.png" alt=""/>Sirus Salari</h1>
          </header>

          <Nav/>

          <main>
            <section>
                <Routes>                     
                    <Route path="/Playlist" element={<SongsPage setSong={setSongToEdit}/>} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="pages/TopicPage" element={<TopicPage />} />
                 
                    <Route path="/create" element={<AddSongPageTable />} /> 
                    <Route path="/update" element={<EditSongPageTable songToEdit={song} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Sirus Salari</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;