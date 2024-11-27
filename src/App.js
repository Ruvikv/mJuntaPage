import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Suspense, lazy } from 'react';

// Lazy Loading
const Layout = lazy(() => import('./components/layout/layout.jsx'));
const LayoutAdmin = lazy(() => import('./components/layout/layoutAdmin.jsx'));
const Login = lazy(() => import('./components/login/loginRegister.jsx'));
const Home = lazy(() => import('./components/home/home.jsx'));
const User = lazy(() => import('./components/user/user.jsx'));
const Bebidas = lazy(() => import('./components/bebidas/bebidas.jsx'));
const UserAdmin = lazy(() => import('./components/user/userAdmin.jsx'));
const BebidasAdmin = lazy(() => import('./components/bebidas/bebidasAdmin.jsx'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Layout> <Home /> </Layout>} />
          <Route path="/user" element={<Layout> <User /> </Layout>} />
          <Route path="/bebidas" element={<Layout> <Bebidas /> </Layout>} />


          <Route path="/userAdmin" element={<LayoutAdmin> <UserAdmin /> </LayoutAdmin>} />
          <Route path="/bebidasAdmin" element={<LayoutAdmin> <BebidasAdmin /> </LayoutAdmin>} />
        
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
