import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Header/Header';
// import Home from '../pages/Home/Home';
// import Catalog from '../pages/Catalog/Catalog';
// import { NotFound } from '../pages/NotFound/NotFound';
// import CatalogDetails from '../pages/CatalogDetails/CatalogDetails';
import { lazy, Suspense } from 'react';
import Loader from './Loader';
const Header = lazy(() => import('./Header/Header'));
const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const CatalogDetails = lazy(() =>
  import('../pages/CatalogDetails/CatalogDetails')
);

function App() {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/catalog/:id/" element={<CatalogDetails />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
