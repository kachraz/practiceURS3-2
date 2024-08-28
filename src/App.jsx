import { CORE_CONCEPTS } from "./data";
import Header from "./comp/Header/Header";
import CoreConcept from "./comp/CoreCo/CoreCo";
import TabButton from "./comp/TabComponents/TabButton.";

// -------------------

// --- Code responsible for the random geenration

// Header Function

function App() {
  let tabContent = "Pls Click Button";

  function handleSelect(selectedButton) {
    //
    tabContent = selectedButton;
    console.log(tabContent);
  }

  console.log("APP Executing");

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
            <TabButton onSelect={() => handleSelect("components-hahah")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
