const Greeting = (props) => {

    console.log(props); 


    return (
        <>
      <h2>Hello {props.name}</h2>
      <h3>{props.name}'s favorite number is {props.favoritenumber}</h3>
      <h3>{props.name}'s favorite number + 10 is {props.favoritenumber + 10}</h3>
      </>
    ); 
  
  
  }; 

  export default Greeting; 