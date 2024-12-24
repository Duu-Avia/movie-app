import { PiMoonLight } from "react-icons/pi";
export function DarkMode() {
  return (
    <>
      <button className="size-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md">
        <PiMoonLight className=" size-[16px] text-[#18181B]" />
      </button>
    </>
  );
}
