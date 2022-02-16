import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting.js'; 




const App = () => {

  const styles = {
    container: {
      padding: 30
      , backgroundColor: new Date().getSeconds() % 2 === 0 ? 'lightblue' : 'pink'
    }
    , heading: {
      textTransform: 'uppercase'
    }
  };
  
  
  return (
    <div
      style={styles.container}
    >
      
      <h1>Hello React</h1>
      
       <Greeting favoritenumber={1} name='Larry'
       favoriteColor={["red", "green"]}/>
      
    </div>
  );
}; 

export default App;
