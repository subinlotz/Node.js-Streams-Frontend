import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
   const videoRef = useRef(null)

  const backendUrl = 'https://node-js-streams-backend.onrender.com/video/'; 
 
 

  const handleChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedVideo) {
      setVideoUrl(`${backendUrl}${selectedVideo}`); 
    }
  };

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.load(); 
    }
  }, [videoUrl]);

  return (
    <div>

      <center>
      <h2>Stream Video</h2>
      
      <form onSubmit={handleSubmit}>
        <label>Select a video:</label>
        <select value={selectedVideo} onChange={handleChange}>
          <option value="">--Choose a Video--</option>
          <option value="video1">Video 1</option>
          <option value="video2">Video 2</option>
        </select>
        <button type="submit">Watch Video</button>
      </form>

     
      {videoUrl && (
        <div>
          <h3>Now Playing:</h3>
          <video ref={videoRef} width="480" height="320" controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      </center>
      
    </div>
  )
}

export default App
