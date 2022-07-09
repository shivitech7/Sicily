import './App.css';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import BookATable from './Components/BookTable/BookATable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-a-table" element={<BookATable />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
