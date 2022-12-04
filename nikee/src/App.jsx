import './App.css';
import { Hero, Sales } from './components';
import {heroapi, popularsales, toprateslaes} from './data/data.js';

function App() {

  return (
   <>
   <main>
    <Hero heroapi={heroapi} />
   <Sales endpoint={popularsales} />
   <Sales endpoint={toprateslaes} />
   </main>
   
   </>
  )
}

export default App
