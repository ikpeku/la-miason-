import './App.css';
import { Header, Blog, Faq, Footer, Services, Popular, Testimonial} from "./containers"

function App() {
  return (
    <div className="App">
      <Header />
      <Popular />
      <Services />
      <Blog />
      <Testimonial />
      <Faq />
      <Footer />
    
    </div>
  );
}

export default App;
