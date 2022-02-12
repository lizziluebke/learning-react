import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js'; 




const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      
       <Greeting favoritenumber={1} name='Larry'/>
      
    </div>
  );
}; 

export default App;
