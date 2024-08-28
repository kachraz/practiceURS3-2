import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import Header from "./comp/Header/Header";
import CoreConcept from "./comp/CoreCo/CoreCo";
import TabButton from "./comp/TabComponents/TabButton.";
import { EXAMPLES } from "./comp/TabComponents/data-with-example.js";

// -------------------

// --- Code responsible for the random geenration

// Header Function

function App() {
  const [slectedTopic, setSelectedTopic] = useState("Please Click a button");

  function handleSelect(selectedButton) {
    //
    setSelectedTopic(selectedButton);
    console.log(slectedTopic);
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
          <div id="tab-component">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
