import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import SellWithUs from './pages/SellWithUs'
import SellerDetails from './pages/SellerDetails' // <-- Add this import
import ApplicantsPage from './pages/ApplicantsPage' // <-- Add this import
import Boost from './pages/Boost' // <-- Add this import
import Contact from './components/Contact'
import Footer from './components/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <Contact />
    </main>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partnership" element={<SellWithUs />} />
        <Route path="/seller-details" element={<SellerDetails />} /> {/* Add this line */}
        <Route path="/agents" element={<ApplicantsPage />} /> {/* Add this line */}
        <Route path="/booster" element={<Boost />} /> {/* Add this line */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
