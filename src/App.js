
import { Navbar } from '../src/Components/Navbar/Navbar';
import { ItemListContainer } from '../src/Components/ItemListContainer/ItemListContainer';
import { Footer } from '../src/Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contacto from './Components/Contacto/Contacto';
import NuestraEmpresa from './Components/NuestraEmpresa/NuestraEmpresa';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>

          <Navbar/>

          <Routes>
            {/* pagina de inicio */}
              <Route path='/' element={ <ItemListContainer /> } />
              <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
              <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
              <Route path='/contacto' element={ <Contacto/> } />
              <Route path='/nuestra' element={ <NuestraEmpresa/> } />
            
            {/* "cualquier ruta no definida retorna al inicio */}
              <Route path='*' element={ <Navigate to ={"/"} />}/>
          </Routes>

          <Footer/>

     </BrowserRouter>

  );
} 

export default App;
