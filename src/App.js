import React from 'react';
import { Header, MovieList, MovieDetails } from './components';
import './App.css';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header/>
      <div className = "d-flex flex-row flex-fill pt-4 p-2">
        <MovieList/>
        <MovieDetails/>
      </div>
    </div>
  );
}

export default App;
