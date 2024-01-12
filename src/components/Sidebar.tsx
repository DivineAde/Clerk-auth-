import { UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import Route from "./Routes";

type Props = {};

const Sidebar = async (props: Props) => {
  const { userId } = await auth();
  const isAuth = !!userId;

  
  return (
    <aside className="sticky inset-x-0 top-0 z-30 w-[270px] transition-all border-b border-gray-200 h-screen bg-[#F2EAE1] px-12 pt-2 hidden  md:flex flex-col justify-between items-center">
      <h5 className="text-3xl font-bold mb-4 border-l-4 border-[#F8D442] text-[1rem] pl-2">
        CRUD OPERATIONS
      </h5>

      <div className="flex items-center flex-col">
        {!isAuth ? (<Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"
          }
          width={60}
          height={60}
          alt=""
        />) : (<UserButton afterSignOutUrl="/"/>)}
        
        <p className="font-bold">Divine Adeyeye</p>
        <label className="text-[#FEAF00] font-semibold">Admin</label>
      </div>

      <Route />

      {!isAuth ? (
      <div className=" flex items-center gap-2 ">
        <Link href={"/sign-in"}>
          <button className="flex items-center gap-4 pb-2 border-r-4 border-[#F8D442] pr-2">Login</button>
        </Link>
        <Link href={"/sign-up"}>
          <button className="flex items-center gap-4 pb-2 pl-1">Sign Up</button>
        </Link>
      </div>
      ) : (
        <Link href={""}>
          <button className="flex items-center gap-4 pb-2">
            Logout
            <IoIosLogOut />
          </button>
        </Link>
      )}
    </aside>
  );
};

export default Sidebar;
