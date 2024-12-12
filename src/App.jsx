import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.css'

function App() {

  return (
      <Router>
        <Header/>
        <main>
          <Routes>
              <Route path="/inayat/" element={<Home/>} />
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
          </main>
        <Footer/>
      </Router>
  )
}

export default App
