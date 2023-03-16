
import { Navbar } from '../src/Components/Navbar/Navbar';
import { ItemListContainer } from '../src/Components/ItemListContainer/ItemListContainer';
import { Footer } from '../src/Components/Footer/Footer';
// import { Tarjetas } from '../src/Components/Cards/cards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
        <div className='container__page'>
          <Navbar/>
          <ItemListContainer greeting={"Adrian Shop"}/>
         {/* <Tarjetas/> */}
          <Footer/>
       </div>
  );
} 

export default App;
