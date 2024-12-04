function Card({ Icon, perc, headline, score, Prog }) {
  return (
    <>
      <div className="bg-white shadow-lg w-56 h-38 rounded-md hover:scale-110 transition-all cursor-pointer">
        <div className="flex justify-between p-4">
          <div>{Icon}</div>
          <p className="font-semibold">{perc}%</p>
        </div>
        <p className="px-2">{headline}</p>
        <div className="flex justify-between p-4">
          <p className="font-bold text-xl">{score}</p>
          <span>{Prog}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
