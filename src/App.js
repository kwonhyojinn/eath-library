import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import GlobalStyle from "./style/GlobalStyle";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
