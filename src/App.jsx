import SolarSystem from "./sso/SSO";
import { CORE_CONCEPTS } from "./data";
// -------------------

// --- Code responsible for the random geenration
const reactDescription = [
  "Essential",
  "Vital",
  "Basic",
  "Indispensable",
  "Necessary",
  "Key",
  "Central",
  "Significant",
  "Important",
  "Critical",
  "Primary",
  "Main",
  "Pivotal",
  "Foundational",
  "Underlying",
  "Underpinning",
  "Undergirding",
  "Underlying",
  "Underpinning",
  "Underpin",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Header Function
function Header() {
  const description = reactDescription[getRandomInt(19)];

  return (
    <header>
      <div id="SolarSystem">
        <SolarSystem />
      </div>
      <h1>{description} Essentials</h1>
      <p>
        {description}👄 panty concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
      </main>
    </div>
  );
}

export default App;
