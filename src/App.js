import Header from './components/header';
import ServicesSection from './components/services';
import SliderComponent from './components/slider';
import StatsSection from './components/statistics';
import WelcomeSection from './components/welcome';

function App() {
  return (
    <div style={{margin: 0, overflowX: 'hidden', overflowY: 'hidden'}}> 
    <Header/>
    <SliderComponent/>
    <WelcomeSection/>
    <ServicesSection/>
    <StatsSection/>
    </div>
     
  );
}

export default App;
