import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import AOS from 'aos'
import 'aos/dist/aos.css' 

import Landingpage from "./components/LandingPage";
import BookingPage from './components/BookingPage';
import CustomCursor from './components/CustomCursor'
import AuthPage from './components/AuthPage';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,     
      easing: 'ease-in-out',
    })
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-bg-primary min-h-screen">
      <CustomCursor />
      
      <Routes>
        <Route path="/" element={<Landingpage />} />
        
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
      </Routes>
    </div>
  )
}

export default App;