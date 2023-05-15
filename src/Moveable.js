import React, { useState } from 'react';
import Webcampopup from './component/PopupComponent';

const Moveable = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleWebcamOff = () => {
    // Code to handle turning off the webcam
    // This could involve making API requests, updating state, or any other necessary logic
    setShowPopup(false); // Close the popup after turning off the webcam
  };

  return (
    <div>
      <h1>Your App</h1>
      <button onClick={handlePopupToggle}>Turn Off Webcam</button>
      {showPopup && <Webcampopup onClose={handlePopupToggle} />}
    </div>
  );
};

export default Moveable;
