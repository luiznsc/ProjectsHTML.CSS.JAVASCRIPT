import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Quiz from './componentes/Quiz/Quiz';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          {/* COMPONENTES INDEPENDENTES */}
          <Route path='/quiz' element={<Quiz/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
