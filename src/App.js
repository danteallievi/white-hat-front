import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MySpace from "./pages/MySpace/MySpace";
import PostDetail from "./pages/PostDetail/PostDetail";
import CreateForm from "./pages/CreateForm/CreateForm";
import useStores from "./hooks/useStores";

import paths from "./navigation/paths";

import "./App.scss";

function App() {
  const { isAuthenticated, user } = useAuth0();
  const { loginUser } = useStores();

  useEffect(() => {
    if (isAuthenticated) {
      const userData = {
        email: user.email,
        name: user.name,
      };
      loginUser(userData);
    }
  }, [loginUser, user, isAuthenticated]);

  return (
    <div>
      <Nav isAuthenticated={isAuthenticated} />
      <main>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={`${paths.mySpace}/:userId`} element={<MySpace />} />
          <Route
            path={`${paths.postDetail}/:postId`}
            element={<PostDetail />}
          />
          {isAuthenticated && (
            <Route path={paths.createForm} element={<CreateForm />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
