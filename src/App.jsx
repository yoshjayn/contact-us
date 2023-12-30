import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
  return (
    <div>
      <Nav />
      <div className="main-container">
      <Header />
      <Form/>
      </div>
          </div>
  );
}

export default App;
