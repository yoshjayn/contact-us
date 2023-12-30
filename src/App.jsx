import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/header";
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
