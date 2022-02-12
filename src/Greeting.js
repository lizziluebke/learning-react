import { Literal } from "jade/lib/nodes";

const Greeting = (props) => {

    console.log(props); 


    return (
        <>
      <h2>Hello {props.name}</h2>
      <h3>{props.name}'s favorite number is {props.favoritenumber}</h3>
      <h3>{props.name}'s favorite number + 10 is {props.favoritenumber + 10}</h3>
      <ul>
          {props.favoriteColor.map(x => <li>{x}</li>)}
      </ul>
      </>
    ); 
  
  
  }; 

  export default Greeting; 