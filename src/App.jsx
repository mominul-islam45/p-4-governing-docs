import "./App.css";
import { Footer } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";

const App = () => {
  return (
    <>
      <div className="bg-sky-200">
      <Navbar/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
