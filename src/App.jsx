import { useSelector } from "react-redux"
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { MusicPlayer, NavBar, SideBar, TopPlaySec } from "./components";
import { AroundMe, ArtistDetails, Discover, Search, SongDetails, TopArtists, TopCharts } from "./pages";
import topChart from "./assets/data.json"

const App= ()=> {
  const {activeSong} = useSelector((state)=> state.player);
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div className="w-screen min-h-screen flex flex-col relative text-white/75 bg-gradient-to-br from-orange-500 via-blue-700/75 to-blue-100/5">
      <NavBar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
      <div className="w-full min-h-screen flex flex-row">
          <SideBar />
          <div className="w-full sm:w-[calc(100%_-_250px)] flex flex-col items-center  xl:flex-row  pr-3 sm:pr-0 ">
            
            <div className="w-full  h-fit pb-20 ">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/around" element={<AroundMe />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:id" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>

            <TopPlaySec />
          </div>
          
          
      </div>

      {activeSong?.attributes?.name && (
        <div className="w-screen fixed bottom-0 left-0 z-50 bg-linear-to-br from-orange-500 via-blue-700/75 to-blue-100/5 py-6">
          <MusicPlayer />
        </div>
      )}
    </div>
  )}

  export default App;