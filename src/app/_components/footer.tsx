import { TbMovie } from "react-icons/tb";
import { FiFilm } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

export function Footer() {
  return (
    <div className="bg-indigo-700 w-full h-[280px] mt-[50px]">
      <div className="text-[14px] text-[#FAFAFA] w-[80%] mx-auto pt-[50px]">
        <div className="flex">
          <FiFilm className="size-[20px] text-[rgb(250,250,250)]" />
          <div className="italic text-[16px] pl-2">Movie Z</div>
        </div>

        <div className="py-[10px]">© 2024 Movie Z. All Rights Reserved.</div>
        <div className="flex w-full gap-[50px]  justify-between">
          <div className="w-fit py-[10px]">
            Contact Information
            <div className="flex items-center">
              <CiMail className="w-[20px] h-[20px] " />
              <div className="py-[10px] pl-3">
                <div>Email:</div>
                <div>support@movieZ.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <LuPhone className="w-[20px] h-[20px]" />
              <div className="py-[10px] pl-3">
                <div>Phone:</div>
                <div>+976 (11) 123-4567</div>
              </div>
            </div>
          </div>
          <div className="w-fit md:mt-[-50px]">
            <div className="pb-[10px]">Follow us</div>
            <div className="pb-[10px]">Facebook</div>
            <div className="pb-[10px]">Instagram</div>
            <div className="pb-[10px]">Twitter</div>
            <div className="pb-[10px]">Youtube</div>
          </div>
        </div>
      </div>
    </div>
  );
}
