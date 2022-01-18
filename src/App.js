import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


import Home from './pages/Home/Home';
import Daigram from './pages/Daigram/Daigram';
import BluePrint from './pages/Blueprint/BluePrint';

function App() {
  
  return (
    <>
    
    <div className="App">
      <header className="App-header">
      
       {/* <button onClick={getca}>generate</button> */}
      </header>
      
       <Router>
           
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Blueprint' element={< BluePrint />}></Route>
                 <Route exact path='/Diagram' element={< Daigram />}></Route>
          </Routes>
        
       </Router>
        
       
      

     
    </div>
    </>
  );
}

export default App;
