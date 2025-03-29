import { Suspense } from 'react'
import './App.css'
import Loader from './components/loader/Loader'
import Home from './pages/Home/Home'
import SQLEditor from './pages/SqlEditor/SQLEditor'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sql-editor' element={<SQLEditor />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
