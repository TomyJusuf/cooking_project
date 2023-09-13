import './App.css';
import Main from './pages/Main';
import AddMaterials from './pages/AddMaterials';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/add-material" Component={AddMaterials} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
