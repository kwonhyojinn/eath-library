import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import GlobalStyle from './style/GlobalStyle';
import Main from './page/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes >
        <Route path='/' element = {<Main />}/>
      </Routes >
    </>
  );
}

export default App;
