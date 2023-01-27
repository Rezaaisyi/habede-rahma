import styles from './style';
import { Navbar, Hero, Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer } from './components';


const App = () => 
(
  <div className="bg-pasteldblue w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-[#F0F0EE] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-texture-line  ${styles.flexStart} h-[400px]`}>
        <Testimonials/>
    </div>

    <div className={`bg-pasteldblue ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>



  </div>
 )


export default App