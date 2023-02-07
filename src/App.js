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

// TODO: 3. Add comments to code
// TODO: 4. Add a 404 page
// TODO: 5. Change the favicon
// TODO: 6. Change page title and meta tags and descriptions
// TODO: 7. Add a README.md file
// TODO: 8. Add custom colors to the theme
// TODO: 9. Host on Netlify
// TODO: 9. Share on Social Media
