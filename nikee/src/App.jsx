import "./App.css";
import { Hero, Sales } from "./components";
import FlexContent from "./components/FlexContent";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
} from "./data/data.js";

function App() {
  return (
    <>
      <main className="flex flex-col relative gap-16">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} />

        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
}

export default App;
