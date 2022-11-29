
import './App.css'
import Create from './components/Create'
import GetAll from './components/GetAll'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Update from './components/Update';

function App() {
  return (
    <div className="">
      <h1>Helo Crud</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Create/>}/>
          <Route path='/edit/:id' element={<Update/>}/>
          <Route path='/' element={<GetAll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
