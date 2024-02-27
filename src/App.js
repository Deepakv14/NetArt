import './App.css';
import Heading from './components/Heading'
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Segment from './components/Segment'
import Component3 from './components/Component3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     {<Heading/>}
     {<Component1/>}
     {<Component2/>}
     {<Segment/>}
     {<Component3/>}
     {<Footer/>}
    </div>
  );
}

export default App;
