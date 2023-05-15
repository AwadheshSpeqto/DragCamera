import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "reactjs-popup/dist/index.css";
import "./webcam.css";

const DragCam = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const element = useRef();
  const elements = useRef();

  const hide = () => {
    element.current.classList.toggle("d-none");
  };

  //  const view=() =>{
  //   elements.current.classList.toggle("d-flex")
  //  }
  useEffect(() => {
    // get user media
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // set video source
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error("Error accessing user media:", error);
      });
  }, []);
  const handleDrag = (event, ui) => {
    const { x, y } = position;
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" ref={element}>
            <div>
              <Draggable
                axis="both"
                position={position}
                onDrag={handleDrag}
                bounds={{ left: 0, right: 1220, top: -30, bottom: 530 }}
              >
                <div>
                  <div>
                    <i
                      onClick={hide}
                      className="fas fa-times-circle"
                      style={{ fontSize: "24px" }}
                    ></i>
                   
                  </div>
                  {/* <div>
                  <i onClick={view} className='fas fa-redo d-flex justify-content-right' style={{fontSize:'24px'}}></i>
                  </div> */}

                  <video
                    ref={videoRef}
                    style={{ width: `260px`, objectfit: "cover" }}
                  />
                  <div>
                    <input
                      type="button"
                      onClick={() => {
                        videoRef.current.requestFullscreen();
                      }}
                      value="FullScreen"
                      className="btn btn-primary ms-5"
                    />
                  </div>
                </div>
              </Draggable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DragCam;
