export default function TabButton({ children, isActive, ...props }) {
  return (
    <button {...props} className={isActive ? "active" : undefined}>
      {children}
    </button>
  );
}
