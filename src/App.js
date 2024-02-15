
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Pages/main'
import Datails from './Pages/detail';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    
    <div class="main-body">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/datail' element={<Datails />}/>
      </Routes>
    </div>
  );
}

export default App;
