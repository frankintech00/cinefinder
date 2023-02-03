import "./App.css";
import { Header, Footer } from "./components";
import { ALLRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <ALLRoutes />
      <Footer />
    </div>
  );
}

export default App;
