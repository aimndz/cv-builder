import BuilderInput from "./BuilderInput";

export default function PersonalCard({ info, setInfo, onClick }) {
  const handleInfoChange = (input, value) => {
    const newInfo = { ...info, [input]: value };
    setInfo(newInfo);
  };

  return (
    <section className=" bg-zinc-700 px-9 py-6 rounded-lg border">
      <h1 className="font-bold text-2xl mb-3 cursor-pointer" onClick={onClick}>
        <div className="flex gap-3">
          <span>
            <i className="fa-solid fa-caret-down"></i>
          </span>
          <span>Personal Information</span>
        </div>
      </h1>
      <BuilderInput
        label="Name"
        placeholder="Enter your name"
        type="text"
        value={info.fullName} // Pass the current state value
        onChange={(e) => handleInfoChange("fullName", e.target.value)}
      />
      <BuilderInput
        label="Address"
        placeholder="Enter your address"
        type="text"
        value={info.address} // Pass the current state value
        onChange={(e) => handleInfoChange("address", e.target.value)}
      />
      <BuilderInput
        label="Phone Number"
        placeholder="Enter your phone number"
        type="number"
        value={info.phoneNumber} // Pass the current state value
        onChange={(e) => handleInfoChange("phoneNumber", e.target.value)}
      />
      <BuilderInput
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={info.email} // Pass the current state value
        onChange={(e) => handleInfoChange("email", e.target.value)}
      />
    </section>
  );
}
