import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { History } from './components/History';
import { Moments } from './components/Moments';
import { Artists } from './components/Artists';
import { Releases } from './components/Releases';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <History />
        <Moments />
        <Artists />
        <Releases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}