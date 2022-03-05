import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Favourite from './Pages/Favourite';
import HomePage from './Pages/HomePage';
import NavbarPage from './Pages/NavbarPage';
import Previous from './Pages/Previous';

function App() {
  return (
    <div>
      <Router>
        <NavbarPage/>
        <Routes>

          <Route path='/' element={<HomePage/> }/>
          <Route path='/prev' element={<Previous/> }/>

          <Route path='/fav' element={<Favourite/> }/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
