
import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header/>
        <div className='container'>
          <Routes>
            {/* <Route exact element={<ListEmployeeComponent/>}></Route> */}
            <Route path='/' element={<ListEmployeeComponent/>}></Route>
            <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
            <Route path='/add-employee' element={<AddEmployee/>}></Route>
            <Route path='/edit-employee/:id' element={<AddEmployee/>}></Route>
            <Route path='/delete-emplyee/:id' element={<ListEmployeeComponent/>}></Route>
            
          </Routes>
          </div>
        <Footer/>
        
     </BrowserRouter>
   </div>
  );
}

export default App;
