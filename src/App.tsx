import { Menu } from './components/Menu'
import { Teaser } from './components/Teaser'
import { CardItems }from './components/CardItems'
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from "./pages/about";

const Home = () => (
  <>
    <Teaser />
    <CardItems />
  </>
);

function App() {
  return (
    <>
      <Router>
      <div className="min-h-screen flex flex-col">
        <Menu />
        <main className="flex-grow bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
