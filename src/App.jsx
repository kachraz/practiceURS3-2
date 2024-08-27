import { CORE_CONCEPTS } from "./data";
import Header from "./comp/Header/Header";
import CoreConcept from "./comp/CoreCo/CoreCo";
import TabButton from "./TabButton.";

// -------------------

// --- Code responsible for the random geenration

// Header Function

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
