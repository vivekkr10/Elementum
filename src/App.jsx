import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Offer from './components/Offer'
import Review from './components/Review'
import Footer from './components/Footer'

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Features />
      <Offer />
      <Review />
      <Footer />
   
    </div>
  )
}

export default App
