import { useEffect, useState, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { SongContext } from './components/SongContext';
import { SearchContext } from './components/SearchContext';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import { Fragment } from 'react/cjs/react.production.min'

function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [songData, setSongData] = useState([])
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    // Fetch Data
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        // Set State and Context value
        return setSongData(resData.results)
      } else {
        return setMessage('Not Found')
      }
    }
    fetchData()
  }

  return (
    <div>
    {message}
        <Router>
            <Routes>
                <Route path="/" element={
                    <Fragment>
                        <SearchBar handleSearch = {handleSearch}/>
                        <Gallery data={songData} />
                    </Fragment>
                } />
                <Route path="/album/:id" element={<AlbumView />} />
                <Route path="/artist/:id" element={<ArtistView />} />
            </Routes>
        </Router>
    </div>
)

}

export default App;

