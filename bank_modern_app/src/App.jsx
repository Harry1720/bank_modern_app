import styles from './style';
import { NavBar, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Hero } from './component';
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
  {/* overflow- hidden => Ẩn nội dung : khi nội dung vượt box chứa */}

    {/* Navbar */}
    <div className = {`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar/>
      </div>
    </div>

    {/* Hero */}
    <div className = {`bg-primary ${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className = {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className = {`${styles.boxWidth}`}>
        <Stats/> 
        <Business/> 
        <Billing/> 
        <CardDeal/> 
        <Testimonials/> 
        <Clients/> 
        <CTA/> 
        <Footer/> 
      </div>
    </div>

  </div>
);

export default App