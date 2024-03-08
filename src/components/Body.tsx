import Hero from './Body/Hero';
import Features from './Body/Features';
import Exclusive from './Body/Exclusive';
import About from './Body/About';

export default function Body() {
  return (
    <>
      <main className="main">
        <Hero />
        <Features />
        <Exclusive />
        <About />
      </main>
    </>
  );
}
