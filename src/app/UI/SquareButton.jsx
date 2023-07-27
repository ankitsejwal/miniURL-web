export default function SquareButton({ name, setState }) {
  return (
    <button
      className="bg-[var(--background-lighter)]text-[18px] font-normal underline border-4 border-[#045770] rounded-[11px] w-min-[101px] mr-6
h-[100px]"
      onClick={() => setState((prev) => !prev)}
      type="button"
    >
      {name}
    </button>
  );
}
