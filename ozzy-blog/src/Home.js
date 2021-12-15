const Home = () => {
    // IF YOU HAVE A PARAMETER IN YOUR FUNCTION YOU NEED TO WRAP THE FUNCTION INTO ANOTHER ANONYMS FUNCTION
    const handleClick = (name) => {
        console.log(`Hello Code guru ${name}`);
    }
    return (
      <div className="home">
          <h2>Home Page</h2>
          <button onClick={() => {
              handleClick('Ozzy');
          }} >Click me</button>
      </div>  
    );
}
 
export default Home;