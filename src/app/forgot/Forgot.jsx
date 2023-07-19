import Input from '../UI/Input';
import Button from '../UI/Button';

export default function Forgot() {
  return (
    <div className="p-14 ">
      <p className="text-[42px] font-semibold ">miniURL</p>
      <p className="text-[20px] font-normal ">https://sejw.al</p>
      <div className="py-16">
        <p className="text-[18px] font-medium  my-3">Email</p>

        <Input placeholder="enter email" />
      </div>
      <div className="flex felx-col justify-between">
        <button
          className="bg-[var(--background-lighter)]text-[18px] font-normal underline border-4 border-[#045770] rounded-[11px] w-[101px]
                      h-[100px]"
        >
          Forgot Password
        </button>
        <Button name="send link" />
      </div>
      <p className="text-[#949494] my-5 ">
        <span className="text-[var(--foreground-darkest)]">
          {' '}
          Sign-up is invite only.
        </span>{' '}
        Email site owner to get the invite link.
        <a href="" className="text-[var(--foreground-darkest)] underline mx-2">
          read more
        </a>
      </p>
    </div>
  );
}
