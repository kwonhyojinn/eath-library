import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import GlobalStyle from "./style/GlobalStyle";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

export function BaseLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyle />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
