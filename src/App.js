import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  console.log(process.env.REACT_APP_AUTHO_DOMAIN);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
