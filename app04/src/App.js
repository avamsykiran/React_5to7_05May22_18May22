import './App.css';
import Header from './components/Header';
import TodosMaster from './components/TodosMaster';

const appTitle = "Todos Tracker";

const App = () => (
  <div className="App">
   <Header brand={appTitle} />
   <div className='container-fluid p-4'>
    <TodosMaster />
   </div>
  </div>
);

export default App;
