import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import { NotFound } from '../pages/NotFound/NotFound';
import CatalogDetails from '../pages/CatalogDetails/CatalogDetails';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/catalog/:id/" element={<CatalogDetails />} />
      </Routes>
    </main>
  );
}

export default App;
