import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  console.log(process.env.REACT_APP_AUTHO_DOMAIN);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
