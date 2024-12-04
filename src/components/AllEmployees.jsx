import { FiSearch } from "react-icons/fi";
import { CiExport } from "react-icons/ci";
import { TbFilter } from "react-icons/tb";
import data from "./data";

function AllEmployees() {
  return (
    <>
      <div className=" container mx-auto px-4 py-2 bg-white rounded-sm">
        <h3 className="font-bold my-5">Check on UIROLL onboading employess</h3>

        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-2 border p-2 rounded-full">
            <span>
              <FiSearch className="font-bold text-xl" />
            </span>
            <input
              type="text"
              placeholder="Search for employee here..."
              className="bg-transparent outline-none"
            />
          </div>

          <div className="flex gap-3 my-2">
            <button className="flex gap-1 items-center border py-2 px-3 rounded-full font-semibold">
              <span>
                <TbFilter />
              </span>
              Filter
            </button>
            <button className="flex gap-1 items-center border py-2 px-3 rounded-full font-semibold">
              <span>
                <CiExport />
              </span>
              Export
            </button>
          </div>
        </div>

        <div className="min-w-full overflow-x-scroll  my-3 ">
          <div className="my-3 grid grid-cols-9 justify-center place-items-center text-xs md:text-sm lg:text-base ">
            <button>All</button>
            <button>New Hires</button>
            <button>Transporting Employees</button>
            <button>Returning Employees</button>
            <button>Extended</button>
          </div>
          <table className="min-w-full">
            <thead className="bg-slate-100 text-xs md:text-sm lg:text-base">
              <tr className="grid grid-cols-9 justify-center place-items-center py-2">
                <th>
                  <span className="mx-3">
                    <input type="checkbox" />
                  </span>
                </th>
                <th>Name &#10606;</th>
                <th>Employee ID &#10606;</th>
                <th>Type</th>
                <th>Progress &#10606;</th>
                <th>Status &#10606;</th>
                <th>Start Date &#10606;</th>
                <th>Unit &#10606;</th>
                <th>Hiring Manager &#10606;</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm lg:text-base">
              {data.map((emp) => (
                <tr className="grid grid-cols-9 justify-center place-items-center">
                  <td>
                    <span className="mx-3">
                      <input type="checkbox" />
                    </span>
                  </td>
                  <td className="capitalize">{emp.name}</td>
                  <td className="capitalize">{emp.employeeId}</td>
                  <td className="capitalize">{emp.type}</td>
                  <td className="capitalize">{emp.progress}</td>
                  <td>{emp.status}</td>
                  <td>{emp.startDate}</td>
                  <td className="capitalize">{emp.unit}</td>
                  <td className="capitalize">{emp.hiring}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllEmployees;
