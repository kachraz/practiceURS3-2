// Buttons compoenent - note the onselet prop is a custom prop, any number of these ca be set

export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
