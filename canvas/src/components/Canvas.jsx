import React from "react";

const Canvas = ({ text, position, onDragStart, onDrag, onDragEnd }) => {


  return (
    <div className="w-96 h-64 border-2 border-gray-800 bg-white flex items-center justify-center relative">
      <div className="absolute cursor-move"
        style={{
            top: position.y,
            left: position.x,
            fontSize: `${position.fontSize}px`,
            fontStyle: position.fontStyle,
            textAlign: "center",
            
        }}
        onMouseDown={onDragStart}
        onMouseMove={onDrag}
        onMouseUp={onDragEnd}
        >
           {text}
      </div>
    </div>
  );
};

export default Canvas;
