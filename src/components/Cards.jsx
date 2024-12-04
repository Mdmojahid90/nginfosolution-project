import Card from "./Card";
import { MdLightbulbOutline } from "react-icons/md";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
function Cards() {
  return (
    <div className="container px-4 -translate-y-16 flex gap-6 justify-between mx-auto flex-wrap ">
      <Card
        Icon={
          <MdLightbulbOutline className="bg-red-900 text-white text-4xl rounded-full p-1 " />
        }
        perc={"+45"}
        headline={"Onboarding This Month"}
        score={15}
        Prog={
          <IoMdTrendingUp className="text-green-400 font-extrabold text-2xl" />
        }
      />
      <Card
        Icon={
          <FaRegUser className="bg-green-800 text-white text-4xl rounded-full p-1 " />
        }
        perc={"+16"}
        headline={"Total Onboarding This Year"}
        score={135}
        Prog={
          <IoMdTrendingUp className="text-green-400 font-extrabold text-2xl" />
        }
      />
      <Card
        Icon={
          <GiProgression className="bg-yellow-600 text-white text-4xl rounded-full p-1 " />
        }
        perc={"-10"}
        headline={"Onbording Journeys in Progress"}
        score={5}
        Prog={
          <IoMdTrendingDown className="text-yellow-400 font-extrabold text-2xl" />
        }
      />
      <Card
        Icon={
          <BsFileEarmarkBarGraph className="bg-purple-900 text-white text-4xl rounded-full p-2 " />
        }
        perc={"+5"}
        headline={"Avg Onboarding Evaluation Score"}
        score={8.5}
        Prog={
          <IoMdTrendingUp className="text-green-400 font-extrabold text-2xl" />
        }
      />
    </div>
  );
}

export default Cards;
