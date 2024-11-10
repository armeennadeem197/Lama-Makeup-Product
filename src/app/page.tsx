import Header from './header'; // Adjust according to the correct path
import Hero from './Hero/page';
import About from './about/page';
import Arrival from './Arrival/page';
import Contact from './Contact/page';

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Arrival/>
      <Contact />
    </>
  );
};

export default page;
