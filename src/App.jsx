import { useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignatureTreatments from './components/SignatureTreatments'
import LimitedOffers from './components/LimitedOffers'
import WhatsNew from './components/WhatsNew'
import ShopTiles from './components/ShopTiles'
import AllServices from './components/AllServices'
import BeforeAfter from './components/BeforeAfter'
import MarqueeGallery from './components/MarqueeGallery'
import Ateliers from './components/Ateliers'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import FloatingButtons from './components/FloatingButtons'
import { CartProvider } from './context/CartContext'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <CartProvider>
      <TopBar />
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <Hero />
        <SignatureTreatments />
        <LimitedOffers />
        <WhatsNew />
        <ShopTiles />
        <AllServices searchQuery={searchQuery} />
        <BeforeAfter />
        <MarqueeGallery />
        <Ateliers />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingButtons />
    </CartProvider>
  )
}