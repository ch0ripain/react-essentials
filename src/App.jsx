import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <Footer />
    </div>
  );
}

export default App;
