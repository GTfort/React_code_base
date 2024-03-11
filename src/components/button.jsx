export default function TabButton({ children, onClick, isSelected }) {
  return (
    <li className="tab-button">
      <button className={isSelected ? "active" : undefined} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
