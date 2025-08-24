import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-base-100">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
