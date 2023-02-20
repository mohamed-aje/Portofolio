import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <main className="dark:text-gray-400 dark:bg-white-900 body-font">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
