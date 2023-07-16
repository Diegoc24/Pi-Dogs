import './App.css';
import {Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import CreateDog from './components/CreateDogForm';


function App() {

   
   
  return (
   
    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home key={"home"}/>}></Route>
       <Route path='/detail/:id' element={<Detail/>}/>
       <Route path='/createdog' element={<CreateDog/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
