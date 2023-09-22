import { Nav, Hero, Statistics, Benefits, Pricing, Contact, Footer } from "./components";
import styles from "./style";

const App = () => (
  <div id="top" className="bg-white w-full">
    <header>
      <Nav />
    </header>

    <main>
      <Hero />

      {/* Statistics section */}
      <div className={`${styles.paddingX} ${styles.flexCenter} shadow-imgShaddowEffect py-[50px] sm:py-[110px]`}>
        <Statistics />
      </div>

      {/* Benefits section */}
      <div className={`${styles.flexCenter} flex-col bg-primaryGrey py-10 ss:py-[105px]`}>
        <Benefits />
      </div>

      {/* Pricing section */}
      <div className={`${styles.flexCenter} flex-row py-14 sm:py-[100px]`}>
        <Pricing />
      </div>

      {/* Contact section */}
      <div className={`${styles.flexCenter} py-[30px] sm:py-[50px] px-6 xs:px-16`}>
        <Contact />
      </div>
    </main>

    <footer className={`${styles.paddingX} mt-5 bg-primaryGrey shadow-footerShadow`}>
      <Footer />
    </footer>

    <a href="#top" className="fixed w-10 h-10 bg-[#08A6E444] rounded-full bottom-[90px] right-2 p-3 block md:hidden">
      <div className="w-full h-full bg-[#08A6E499] rounded-full"></div>
    </a>
  </div>
);

export default App;
