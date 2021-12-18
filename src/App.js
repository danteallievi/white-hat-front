import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useStores from "./hooks/useStores";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const { loginUser, loggedUser } = useStores();

  useEffect(() => {
    if (isAuthenticated) {
      const userData = {
        email: user.email,
        name: user.name,
      };
      loginUser(userData);
    }
  }, [loginUser, user, isAuthenticated]);

  console.log(loggedUser);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
