import developer from "../assets/developer5.png";
function AdminAction() {
  return (
    <>
      <div className="container mx-auto p-4 flex justify-between items-center flex-col lg:flex-row ">
        <div className="flex justify-between bg-white shadow-sm p-4 rounded-sm gap-6 items-center h-46 w-[70%] ">
          <div className="">
            <h2 className="font-bold text-xl my-2">
              Do not know where to start?
            </h2>
            <p>
              Take a quick tour of our onboarding tool to know how to onboard on
              employee
            </p>

            <button className="bg-blue-600 text-white mt-6 px-3 py-2 rounded-full">
              Start a tour <span className="font-bold">&rarr;</span>
            </button>
          </div>
          <div>
            <img src={developer} alt="loading" height={200} width={200} />
          </div>
        </div>
        <div className="flex flex-col bg-white m-3 p-3 rounded-md ">
          <button className="bg-blue-600 text-white my-3 px-3 py-2 rounded-full min-w-16">
            View Dashboard <span className="font-bold">&rarr;</span>
          </button>
          <button className="bg-green-600 text-white my-3 px-3 py-2 rounded-full min-w-16">
            Add New Employee <span className="font-bold">&rarr;</span>
          </button>
          <button className="bg-blue-950 text-white my-3 px-3 py-2 rounded-full min-w-16">
            Customization <span className="font-bold">&rarr;</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminAction;
