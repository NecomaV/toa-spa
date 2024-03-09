import BFT from './comps/BFT';
import Char from './comps/Char';
import Footer from './comps/Footer';
import Hero from './comps/Hero';
import LongComp from './comps/LongComp';
import NavBar from './comps/NavBar'; 
import Sg from './comps/Sg';

function App() {
  return (
    <div className=" bg-main w-full">
       <NavBar />
       <Hero />
       <LongComp />
       <Sg />
       <Char />
       <BFT />
       <Footer />
    </div>
  );
}

export default App;
