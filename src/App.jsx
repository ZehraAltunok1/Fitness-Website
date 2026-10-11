import { useCallback, useState } from 'react';
import './App.css';
import { SECTION_IDS } from './data';
import { useLang } from './LanguageContext';
import { useActiveSection, useReveal } from './hooks';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Trainers from './components/Trainers';
import Schedule from './components/Schedule';
import Plans from './components/Plans';
import BmiCalculator from './components/BmiCalculator';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Join from './components/Join';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const { t } = useLang();
  const active = useActiveSection(SECTION_IDS);
  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  useReveal();

  const openLogin = useCallback(() => setLoginOpen(true), []);
  const closeLogin = useCallback(() => setLoginOpen(false), []);

  return (
    <>
      <a href="#main" className="skip-link">{t.nav.skip}</a>
      <Navbar active={active} onLogin={openLogin} />
      <main id="main">
        <Hero onLogin={openLogin} />
        <Programs onChooseGoal={setSelectedGoal} />
        <About />
        <Trainers />
        <Schedule />
        <Plans onChoosePlan={setSelectedPlan} />
        <BmiCalculator />
        <Reviews />
        <Faq />
        <Blog />
        <Contact />
        <Join selectedPlan={selectedPlan} selectedGoal={selectedGoal} />
      </main>
      <Footer />
      <LoginModal open={loginOpen} onClose={closeLogin} />
    </>
  );
}

export default App;
