import { useState, useEffect } from 'react'
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";


const App = () => {
  const [isSticky, setIsSticky] = useState(false) 

   useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 80) {
       setIsSticky(true);
     } else {
       setIsSticky(false);
     }
   };
   window.addEventListener("scroll", handleScroll);
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);


  return (
    <div>
    <div id='header'
      className={`${isSticky ? "bg-blue-900 shadow-md" : ""} ${
        styles.paddingX
      } ${styles.flexCenter} fixed transition-all ease-in-out duration-300 w-full z-50`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  <div className='bg-primary w-full overflow-hidden'>

    <div className={`bg-primary ${styles.flexStart} mt-20`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
    </div>
);
 }

export default App;
