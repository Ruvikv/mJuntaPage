import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//Layout
import Layout from './components/layout/layout.jsx';

//Rutas
import Login from './components/login/loginRegister.jsx'
import Home from './components/home/home.jsx';


function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Login />} />


          <Route exact path="/home" element={<Layout><Home /></Layout>} />
      </Routes>
      
    </Router>
  );
}

export default App;
