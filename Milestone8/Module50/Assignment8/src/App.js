import Blog from "./Component/BLog/Blog";
import Body from "./Component/Body/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Body></Body>
      <div className="blog-container">
        <Blog></Blog>
      </div>
    </div>
  );
}

export default App;
