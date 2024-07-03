// Step 1. Import the image
import logo from './assets/logo.png';
function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      {/* Step 2. Display the imported image in the returned JSX code */}
      <img src={logo} />
    </div>
  );
}

export default App;
