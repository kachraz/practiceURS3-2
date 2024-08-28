// Buttons compoenent - note the onselet prop is a custom prop, any number of these ca be set

export default function TabButton({ children, onSelect }) {
  console.log("Tab Execute");

  return (
    <li>
      <button onzed brClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
