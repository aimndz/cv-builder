export default function BuilderInput({
  label,
  placeholder,
  type,
  value,
  onChange,
}) {
  return (
    <div>
      <label htmlFor="name" className="block">
        {label}
      </label>
      <input
        id="name"
        type={type}
        className="w-full text-black py-2 px-4 rounded mb-3"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
