import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Header from './components/Header';

const appTitle = "Life Cycle Methods Demo";

const App = () => (
  <div className="App">
   <Header brand={appTitle} />
   <div className='container-fluid p-4'>
    <Counter1 />
    <Counter2 />
   </div>
  </div>
);

export default App;
