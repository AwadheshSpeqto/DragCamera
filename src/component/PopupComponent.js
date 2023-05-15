import React, { useState } from 'react';

const PopupComponent = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            {/* Your popup content here */}
            <h1>Popup</h1>
            <p>This is a popup!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;
