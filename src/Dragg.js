
import React from 'react';
import  { useRef } from 'react';


export default function Dragg() {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };
  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }}>
      {/* <video
        ref={videoRef}
        style={{ width: '50%', height: '50%' }}
        controls
        autoPlay
        playsInline
        muted
        src="https://www.youtube.com/embed/F2UUR1eeIjw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen onClick={handleFullscreen}
      /> */}
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/F2UUR1eeIjw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen onClick={handleFullscreen}></iframe>
    </div>
    </>
  )
}


