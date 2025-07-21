import BarrasDecorativas from '@/components/BarrasDecorativas';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SloganSection from '@/components/SloganSection';

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <BarrasDecorativas />
      <Navbar />
      <main>
        {<SloganSection />}
      </main>
    </div>
  );
}
