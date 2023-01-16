import "./App.css";
import { Container, Grid } from "@mui/material";

// import TopBar from "./components/Zone/E-learning/TopBar";
// import HeroSection from "./components/Zone/E-learning/HeroSection";

import HeroSection from "./components/Zone/Travel/HeroSection";
import TopBar from "./components/Zone/Travel/TopBar";
function App() {
  return (
    <Container maxWidth="xxl" disableGutters>
      <TopBar />
      <HeroSection />
    </Container>
  );
}
export default App;
