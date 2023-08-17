import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Forgot from './component/Forgot'
import Nav from './component/Nav'
import Hero from './component/Hero'


function App() {
  return (
    <BrowserRouter>
     <Nav/>
     <Routes>
      <Route index element={<Hero/>} />
      <Route path='/forgot' element={<Forgot/>}/>
     </Routes>

    </BrowserRouter>
  );
}

export default App;
