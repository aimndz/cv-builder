export default function BuilderButton({ ButtonText, onButtonClick }) {
  return (
    <>
      <button
        className="transition delay-75 duration-300 ease-in-out block bg-zinc-700 px-8
                  py-3 rounded-lg font-bold border hover:bg-sky-500 hover:shadow-custom-glow text-2xl "
        onClick={onButtonClick}
      >
        <div className="flex gap-3">
          <span>
            <i className="fa-solid fa-caret-right"></i>
          </span>
          <span>{ButtonText}</span>
        </div>
      </button>
    </>
  );
}
