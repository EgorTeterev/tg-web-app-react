import { useEffect } from 'react';
import './App.css';


function App() {
  
  useEffect(()=>{
    tg.ready();
  },[])

  const onClose = () =>{
    tg.close()
  }


  return (
    <div className="App">
      work
    </div>
  );
}

export default App;
