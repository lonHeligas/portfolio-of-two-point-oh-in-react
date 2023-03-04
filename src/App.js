import './App.css';
import { Header, Wrapper, Footer } from './components';


import { IntroPage, PortfolioPage, ResumePage, ContactPage } from './pages';

function App() {
  return (
    <Wrapper>
      <Header>
        <div>
          <h1>This is the Header</h1>
        </div>

      </Header>
      <Footer>
        <h1>This is the Footer</h1>
      </Footer>   
    
    </Wrapper>
  );
}

export default App;
