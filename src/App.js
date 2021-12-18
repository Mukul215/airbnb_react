import "./App.css";
import { Card, Header, Hero } from "./components/index";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Card
        img="Katie.png"
        rating="5.0"
        reviewCount={100}
        country="United States"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
