import "./App.css";
import { Button } from "./components/common/Button";
import { SectionTitle } from "./components/common/SectionTitle";

const App = () => {
  return (
    <>
      <h1 class=" text-3xl font-bold underline font-grotesk ">Hello world!</h1>
      <Button>Primary</Button>
      <Button className="bg-white text-secondary">Secondary</Button>
      <SectionTitle gradient='buddy'>Go ahead </SectionTitle>
    </>
  );
}

export default App;
