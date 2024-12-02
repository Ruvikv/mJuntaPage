import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Suspense, lazy } from 'react';

//Loagin
import Loading from './Load/loading.jsx';

// Lazy Loading
const Layout = lazy(() => import('./components/layout/layout.jsx'));
const Login = lazy(() => import('./components/login/loginRegister.jsx'));
const Unauthorized = lazy(() => import('./components/unauthorized/unauthorized.jsx'));
const Home = lazy(() => import('./components/home/home.jsx'));
const User = lazy(() => import('./components/user/user.jsx'));
const Bebidas = lazy(() => import('./components/bebidas/bebidas.jsx'));
const UserAdmin = lazy(() => import('./components/user/userAdmin.jsx'));
const BebidasAdmin = lazy(() => import('./components/bebidas/bebidasAdmin.jsx'));


const ProtectedRouter = ({children, allowedRoles}) =>{
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  if (!token){
    return <Navigate to="/login" replace />
  }
  if(allowedRoles && !allowedRoles.includes(userRole)){
    return <Navigate to="/unauthorized" replace />
  }

  return children
};

function App() {
  return (
    <Router>
      <Suspense fallback={Loading}>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/unauthorized" element={< Unauthorized/>} />



          <Route path="/home" element={
          <ProtectedRouter allowedRoles={['administrador','empleado','cliente']}>
            <Layout> <Home /> </Layout>
          </ProtectedRouter>} />

          <Route path="/user" element={
          <ProtectedRouter allowedRoles={['administrador','empleado','cliente']}>
            <Layout> <User /> </Layout>
          </ProtectedRouter>} />

          <Route path="/bebidas" element={
          <ProtectedRouter allowedRoles={['administrador','empleado','cliente']}>
            <Layout> <Bebidas /> </Layout>
          </ProtectedRouter>} />




          {/* Rutas Protegidas */}
          <Route path="/userAdmin" element={
          <ProtectedRouter allowedRoles={['administrador']}>
            <Layout> <UserAdmin /> </Layout>
          </ProtectedRouter>}/>


          <Route path="/bebidasAdmin" element={
          <ProtectedRouter allowedRoles={['administrador']}>
            <Layout> <BebidasAdmin /> </Layout>
          </ProtectedRouter>} />
        
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
