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

// TODO: 1. Add social links to footer
// TODO: 2. Tidy up assets folder
// TODO: 3. Add comments to code
// TODO: 4. Add a 404 page
// TODO: 5. Change the favicon
// TODO: 6. Change page title and meta tags and descriptions
// TODO: 7. Add a README.md file
// TODO: 8. Add custom colors to the theme
// TODO: 9. Host on Netlify
// TODO: 9. Share on Social Media
