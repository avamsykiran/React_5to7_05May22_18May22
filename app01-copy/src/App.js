import './App.css';
import Header from './components/Header';
import TodosMaster from './components/TodosMaster';

const appTitle = "Todos Tracker";

const App = () => (
  <div className="App">
   <Header brand={appTitle} />
   <TodosMaster />
  </div>
);

export default App;
