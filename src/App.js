import React, { useState, useEffect } from "react";
import Menu from "./menu/Menu";
import Main from "./Main";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="app" style={{ overflowX: "hidden" }}>
      <Menu />
      <Main />
    </div>
  );
}

export default App;
