import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/test' element={<Test/>} />
          
             
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
