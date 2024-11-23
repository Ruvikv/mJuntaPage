import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//Layout
import Layout from './components/layout/layout.jsx';
import LayoutAdmin from './components/layout/layoutAdmin.jsx';

//Rutas
import Login from './components/login/loginRegister.jsx'
import Home from './components/home/home.jsx';
import User from './components/user/user.jsx';
import Bebidas from './components/bebidas/bebidas.jsx';

//Rutas Administrador
import UserAdmin from './components/user/userAdmin.jsx';
import BebidasAdmin from './components/bebidas/bebidasAdmin.jsx';


function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Login />} />


          <Route exact path="/home" element={<Layout> <Home /> </Layout>} />
          <Route exact path="/user" element={<Layout> <User /> </Layout>} />
          <Route exact path="/bebidas" element={<Layout> <Bebidas /> </Layout>} />


          <Route exact path="/userAdmin" element={<LayoutAdmin> <UserAdmin/> </LayoutAdmin> } />
          <Route exact path="/bebidasAdmin" element={ <LayoutAdmin> <BebidasAdmin/> </LayoutAdmin> } />
      </Routes>
      
    </Router>
  );
}

export default App;
