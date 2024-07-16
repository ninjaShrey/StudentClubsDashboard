import React, { useState, useEffect } from 'react';
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="App">
      {loading && (
        <div className="loader-container">
          <ClimbingBoxLoader
            color="#fff200"
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!loading && (
        <>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </>
      )}
    </div>
  );
}

export default App;
