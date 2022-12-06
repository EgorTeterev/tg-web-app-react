import { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(()=>{
    tg.ready();
  },[])


  return (
    <div className="App">
      work
      <Header></Header>
    </div>
  );
}

export default App;
