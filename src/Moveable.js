import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable,ResizableBox } from "react-resizable";
// import { ResizableBox } from "react-resizableBox";

const Moveable = ({ width, height, handleResize, children }) => {
  return (
    
    <Resizable
      width={width}
      height={height}
      onResize={handleResize}
      minConstraints={[100, 100]}
    >
      {children}
    </Resizable>
  );
};

const DraggableBox = ({ children }) => {
  return (
    <Draggable handle=".handle">
      <div className="box handle">{children}</div>
    </Draggable>
  );
};

const DragAndResizeBox = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return (
    <ResizableBox width={width} height={height} handleResize={handleResize}>
      <DraggableBox>
        <div>
          <h2>Drag and Resize Box</h2>
          <p>Drag the box around and resize it using the handle</p>
        </div>
      </DraggableBox>
    </ResizableBox>
    
  );
};

export default Moveable;
