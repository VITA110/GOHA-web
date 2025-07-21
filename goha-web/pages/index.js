import BarrasDecorativas from '@/components/BarrasDecorativas';
import Navbar from '@/components/Navbar';
import SloganSection from '@/components/SloganSection';
import FraseAccion from '@/components/FraseAccion';

export default function Home() {
  return (
    <>
      <BarrasDecorativas /> 

      <div> {/* sin position: relative ni overflow: hidden */}
        <Navbar />
        <main>
          <SloganSection />
          <FraseAccion />

          
        </main>
      </div>
    </>
  );
}
