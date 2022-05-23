import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About/About";
import Expertise from "./components/Our Expertise/Expertise";
import ProductList from "./components/Product List/ProductList";
import Footer from "./components/Footer/Footer";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
      className="App"
    >
      <Toggle />
      <Router>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/expertise"
              element={
                <>
                  <Navbar />
                  <Expertise />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/work"
              element={
                <>
                  <Navbar />
                  <ProductList />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
