import SolarSystem from "../../sso/SSO";
import "./Header.css";

// Header component extracted from APP.js to its own file

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

export default function Header() {
  const description = reactDescription[getRandomInt(19)];

  return (
    <header>
      <div id="SolarSystem">
        <SolarSystem />
      </div>
      <h1>{description} Essentials</h1>
      <p>
        {description}👄 panty concepts you will need for almost any app you are
        going to build! -{" "}
        <span style={{ color: "yellow" }}>
          2nd attempt for further learning
        </span>
      </p>
    </header>
  );
}
