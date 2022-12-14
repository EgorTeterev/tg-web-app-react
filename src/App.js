import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { Route,Routes} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';


function App() {
  const {onToggleButton,tg} = useTelegram()
    
  useEffect(()=>{
    tg.ready();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route index element={<Form/>}/>
        <Route path={'productLict'} element={<ProductList/>}/>
      </Routes>
    </div>
  );
}
export default App;
