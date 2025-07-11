import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import DataInsightsSection from './components/DataInsightsSection'
import UseCasesSection from './components/UseCasesSection'
import CallToActionSection from './components/CallToActionSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DataInsightsSection />
        <UseCasesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

