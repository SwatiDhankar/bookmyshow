
import "./App.css";

// Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";

// Routes
import {Routes, Route} from 'react-router-dom';
import axios from "axios";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params ={};
axios.defaults.params["api_key"]= "322aad60ba630d969fd4029c3e42aea9";

function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/play" element={<PlayPage />} />
  </Routes>
}

export default App;