import BuilderButton from "./BuilderButton";

export default function PersonalButton({ onButtonClick }) {
  return (
    <BuilderButton
      ButtonText="Personal Information"
      onButtonClick={onButtonClick}
    />
  );
}
