import './App.css';
import HeroPage from './components/HeroPage/HeroPage';
import Introduction from './components/Introduction/Introduction';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import AreaOfPractices from './components/AreaOfPractices/AreaOfPractices';
import Team from './components/Team/Team';
import Faq from './components/FAQ/Faq';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import ClientReview from './components/ClientReview/ClientReview';

function App() {
  return (
    <div className="App">
      <HeroPage />
      <Introduction />
      <WhyChooseUs />
      <AreaOfPractices />
      <ClientReview />
      <Team />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
