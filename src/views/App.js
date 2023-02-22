import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./Example/MyComponents";
/**
 * 2 components: class component / func components(func / arrow)
 * JSX
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MyComponents />
      </header>
    </div>
  );
}

export default App;
