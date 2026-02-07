import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ModulePage from './pages/ModulePage';
import DefiPage from './pages/DefiPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/modulo:id" element={<ModulePage />} />
          <Route path="/defi-2025" element={<DefiPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
