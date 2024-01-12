import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2">
      <IoCaretBackCircleOutline className="w-7 h-7 cursor-pointer" />

      <div className="flex gap-3">
      <div className="relative w-fit">
        <input placeholder="search" type="text" className="px-3 py-1 rounded-md border border-[#E5E5E5]" />
        <CiSearch className="w-7 h-7 absolute top-[10%] right-0 cursor-pointer text-[#C4C4C4]"  />
      </div>

      <FaRegBell className="w-7 h-7 cursor-pointer text-[#C4C4C4]"  />
      </div>
    </div>
  )
}

export default Header