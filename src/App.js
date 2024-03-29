import LogoBar from './components/clientLogos';
import FooterSection from './components/footer';
import Header from './components/header';
import LatestNews from './components/news';
import ServicesSection from './components/services';
import SliderComponent from './components/slider';
import StatsSection from './components/statistics';
import TestamonialSection from './components/testamonials';
import WelcomeSection from './components/welcome';

function App() {
  return (
    <div style={{margin: 0, overflowX: 'hidden', overflowY: 'hidden'}}> 
    <Header/>
    <SliderComponent/>
    <WelcomeSection/>
    <ServicesSection/>
    <StatsSection/>
    <TestamonialSection/>
    <LogoBar/>
    <LatestNews/>
    <FooterSection/>
    </div>
     
  );
}

export default App;
