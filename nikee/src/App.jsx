import "./App.css";
import { Hero, Sales, Stories } from "./components";
import FlexContent from "./components/FlexContent";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
} from "./data/data.js";

function App() {
  return (
    <>
      <main className="flex flex-col relative gap-16">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
    </>
  );
}

export default App;
