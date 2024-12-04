import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosAnalytics } from "react-icons/io";
import { LuLayoutTemplate } from "react-icons/lu";
import { CgMenuOreos } from "react-icons/cg";
function Navbar() {
  return (
    <>
      <header className="container p-4 flex items-center justify-between flex-wrap md:flex-nowrap min-w-full bg-white">
        <p className="text-blue-800 font-bold text-2xl">UIROLL</p>

        <div>
          <ul className="flex items-center justify-between gap-3 flex-wrap ">
            <li className="flex items-center gap-1 hover:text-red-600">
              <span>
                <CgMenuOreos />
              </span>
              Home
            </li>
            <li className="flex items-center gap-1 hover:text-red-600">
              <span>
                <IoIosAnalytics />
              </span>
              Analytics
            </li>
            <li className="flex items-center gap-1 hover:text-red-600">
              <span>
                <LuLayoutTemplate />
              </span>
              Plateform Customization
            </li>
          </ul>
        </div>

        <div className="md:flex items-center gap-2 border p-2 rounded-full hidden">
          <span>
            <FiSearch className="font-bold text-xl" />
          </span>
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none "
          />
        </div>
        <div className="flex items-center gap-3 ml-2">
          <p className=" text-semibold ">Hello</p>
          <FaRegCircleUser className="text-2xl" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
