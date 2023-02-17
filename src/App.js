import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <main className="dark:text-gray-400 dark:bg-white-900 body-font">
        <Navbar />
        <About />
        <Skills />
      </main>

      <Footer />
    </>
  );
};

export default App;
