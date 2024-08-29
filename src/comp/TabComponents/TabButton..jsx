// Buttons compoenent - note the onselet prop is a custom prop, any number of these ca be set

export default function TabButton({ children, onSelect, isSelected }) {
  console.log("Tab Execute");

  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
