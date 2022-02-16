import { Literal } from "jade/lib/nodes";

const Greeting = ({
  name 
  , favoriteColor
  , favoritenumber
}) => {

    //console.log(props); 


    return (
        <>
      <h2>Hello {name}</h2>
      <h3>{name}'s favorite number is {favoritenumber}</h3>
      <h3>{name}'s favorite number + 10 is {favoritenumber + 10}</h3>
      <ul>
          {favoriteColor.map(x => <li>{x}</li>)}
      </ul>
      </>
    ); 

  
  }; 

  export default Greeting; 