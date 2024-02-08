import AboutMe from "./components/AboutMe";
import Weather from "./components/Weather";
import Navigation from "./components/Navigation";

import "./index.css";

function App() {
  return (
    <>
      <section className="main">
        <div className="content">
          <Weather />
        </div>
      </section>
    </>
  );
}

export default App;
