
import Navbar from './Navbar';
import Home from './Home';
function App() {
  
  // const link = "http://google.se"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <a href={link}>Google</a> */}
      </div>
    </div>
  );
}

export default App;
