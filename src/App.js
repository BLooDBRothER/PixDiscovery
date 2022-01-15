import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePhoto from "./components/home_photo/HomePhoto";
import SearchPhoto from "./components/home_search/SearchPhoto";
import SearchVideo from "./components/home_search/SearchVideo";
import HomeVideo from "./components/home_video/HomeVideo";
import SearchBar from "./components/search/SearchBar";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header isNavbarVisible={isNavbarVisible} />}>
          <Route
            index
            element={
              <>
                <SearchPhoto setIsNavbarVisible={setIsNavbarVisible} />
                <HomePhoto />
              </>
            }
          />
          <Route
            path="video"
            element={
              <>
                <SearchVideo setIsNavbarVisible={setIsNavbarVisible} />
                <HomeVideo />
              </>
            }
          />
          <Route 
           path="search" 
           element={<SearchBar setIsNavbarVisible={setIsNavbarVisible} />} 
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
