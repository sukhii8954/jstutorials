import { useState } from "react";
import Canvas from "./components/Canvas";
import TextEditor from "./components/TextEditor";
// import Controls from "./components/Controls";

function App() {
  const [text, setText] = useState("Editable Text");
  const [fontSize, setFontSize] = useState(16);
  const [fontStyle, setFontStyle] = useState("normal");
  const [position, setPosition] = useState({ x: 192, y: 128 });
  const [isEditing, setIsEditing] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => setDragging(true);
  const handleDragEnd = () => setDragging(false);

  const handleText = (updateText) => {
    setText(updateText);
  };
  const handleDrag = (e) => {
    if (dragging) {
      const canvasWidth = 384; // Tailwind `w-96` = 384px
      const canvasHeight = 256; // Tailwind `h-64` = 256px

      // Constrain the position to the canvas boundaries
      const newX = Math.min(Math.max(e.clientX - 50, 0), canvasWidth);
      const newY = Math.min(Math.max(e.clientY - 25, 0), canvasHeight);

      setPosition({
        x: newX,
        y: newY,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400 p-4">
        <Canvas
          text={text}
          position={{ ...position, fontSize, fontStyle }}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
        />

        <div className=" mt-4">
          <button 
            onClick={() => setIsEditing(true)}
            className="bg-blue-700 text-black
             px-10 py-10 rounded"
          >
            Edit Text
          </button>
        </div>

        {/* <Controls
        onEditText={() => setIsEditing(true)}
        onFontSizeIncrease={() => setFontSize(fontSize + 2)}
        onFontSizeDecrease={() => setFontSize(fontSize - 2)}
        onFontStyleChange={() => setFontStyle(fontStyle)}
      /> */}

        <TextEditor
          isOpen={isEditing}
          initialText={text}
          onSave={handleText}
          onClose={() => setIsEditing(false)}
        />
      </div>
    </>
  );
}

export default App;
