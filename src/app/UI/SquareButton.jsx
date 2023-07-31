export default function SquareButton({ name, onClick, setState }) {
  return (
    <button
      className="bg-[var(--background-lighter)] w-30 px-6 text-[18px]  underline border-4 border-[#045770] rounded-[11px]
h-[100px]"
      onClick={onClick}
      // onClick={() => setState((prev) => !prev)}
      type="button"
    >
      {name}
    </button>
  );
}
