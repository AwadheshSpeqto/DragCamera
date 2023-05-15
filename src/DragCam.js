import React, { useEffect, useRef,useState } from 'react';
import Draggable from 'react-draggable';

const DragCam = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const element =useRef();
  

  useEffect(() => {
    // get user media
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        // set video source
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(error => {
        console.error('Error accessing user media:', error);
      });
  }, []);
  const handleDrag = (event, ui) => {
         const { x, y } = position;
         setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
       };
      
  return (
    <>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-12'>
    <Draggable
       axis="both"
       position={position}
      onDrag={handleDrag}
       bounds={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
     >
       <div>
      <video ref={videoRef} style={{ width: `200px`, height: `200px`, objectfit: 'cover'  }} />
      <input type='button' onClick={()=>{videoRef.current.requestFullscreen()}}  value="Click"/>
    </div>
   </Draggable>
   </div>
   </div>
   </div>
   
    </>
  );
};

export default DragCam;




























