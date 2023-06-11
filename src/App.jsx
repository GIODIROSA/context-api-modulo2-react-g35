import { BrowserRouter as Router } from "react-router-dom";

//componentes
import Nav from "./components/Nav";
import FooterNatural from "./components/FooterNatural";

//router
import AppRoutes from "./routes/AppRoutes";

//contexto
import { FavoritesProvider } from "./components/FavoritesContext";

const App = () => {
  return (
    <>
      <div className="App">
        
        <FavoritesProvider>
          <Router>
            <Nav />
            <AppRoutes />
          </Router>
        </FavoritesProvider>

        <FooterNatural />
      </div>
    </>
  );
};

export default App;
