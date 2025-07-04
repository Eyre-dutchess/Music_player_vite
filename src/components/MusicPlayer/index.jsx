import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { nextSong, playPause, prevSong } from "../../redux/features/playerSlice"
import TrackInfo from "./TrackInfo"
import Control from "./Control"
import Seekbar from "./Seekbar"
import Player from "./Player"
import VolumnBar from "./VolumnBar"

const MusicPlayer = () =>{
    const {activeSong, currentSongs, currentIndex, isActive, isPlaying} = useSelector((state)=> state.player)
    const dispatch = useDispatch()

    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);
    const [volume, setVolume] = useState(0.3);

    useEffect(() => {
        if (currentSongs.length){
            dispatch(playPause(true));
        } 
      }, [currentIndex]);

    const handlePlayPause = () =>{
        if (!isActive) return;

        if (isPlaying) {
          dispatch(playPause(false));
        } else {
          dispatch(playPause(true));
        }
    }

    const handlePrevSong = () =>{
        if (currentIndex === 0) {
            dispatch(prevSong(currentSongs.length - 1));
          } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
          } else {
            dispatch(prevSong(currentIndex - 1));
          }
    }

    const handleNextSong = () =>{
        dispatch(playPause(false));

        if (!shuffle) {
          dispatch(nextSong((currentIndex + 1) % currentSongs.length));
        } else {
          dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
        }
    }
    return(
        <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
            <TrackInfo isPlaying={isPlaying} isActive={isActive} activeSong={activeSong}/>

            <div className="flex-1 flex flex-col items-center justify-center">
                <Control 
                    isPlaying={isPlaying}
                    isActive = {isActive}
                    repeat={repeat}
                    setRepeat={setRepeat}
                    shuffle={shuffle}
                    setShuffle={setShuffle}
                    currentSongs={currentSongs}
                    handlePlayPause={handlePlayPause}
                    handleNextSong={handleNextSong}
                    handlePrevSong={handlePrevSong}
                />
                <Seekbar value={appTime} min="0" max={duration} onInput={(e)=> setSeekTime(e.target.value)} setSeekTime={setSeekTime} appTime={appTime} />
                <Player 
                    activeSong={activeSong}
                    volume={volume}
                    isPlaying={isPlaying}
                    seekTime={seekTime}
                    repeat={repeat}
                    currentIndex={currentIndex}
                    onEnded={handleNextSong}
                    onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                    onLoadedData={(event) => setDuration(event.target.duration)}
                    />
            </div>

            <VolumnBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
        </div>
    )
}

export default MusicPlayer