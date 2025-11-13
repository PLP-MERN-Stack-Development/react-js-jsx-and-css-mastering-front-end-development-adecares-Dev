export default function Button({ label, variant = "primary", onClick }) {
  const base = "px-4 py-2 rounded font-semibold text-white";
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };
  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
