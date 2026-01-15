import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
