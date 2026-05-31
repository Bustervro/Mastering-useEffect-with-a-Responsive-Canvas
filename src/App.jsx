import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // I used an empty dependency array because this effect only needs to run once when the component loads.
    // If I left the dependency array out, the effect would run after every render and keep adding resize listeners.
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <div className="page">
      <div className={isMobile ? "card mobile" : "card desktop"}>
        <h1>Responsive Card</h1>

        <p className="mode">
          Current Layout: <strong>{isMobile ? "Mobile" : "Desktop"}</strong>
        </p>

        <p>Width: {windowSize.width}px</p>
        <p>Height: {windowSize.height}px</p>

        <p className="message">
          Resize the browser window to see the card update in real time.
        </p>
      </div>
    </div>
  );
}

export default App;
