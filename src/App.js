import "./App.css";
// Import the Header and Footer components from the './components' directory
import { Header, Footer } from "./components";
// Import the ALLRoutes component from the './routes/AllRoutes' directory
import { ALLRoutes } from "./routes/AllRoutes";

// Main component for the App
function App() {
  // Render the App component, consisting of the Header, ALLRoutes and Footer components
  return (
    <div className="App">
      <Header />
      <ALLRoutes />
      <Footer />
    </div>
  );
}

// Export the App component as the default export
export default App;
