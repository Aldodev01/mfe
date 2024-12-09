
const Recheiver = ({ count, countZS, countRX }: {count?: number, countZS?: number, countRX?: number}) => {
  return (
    <>
      <h1>Recheiver</h1>
      <div className="flex gap-2 bg-slate-600 text-slate-100">
        <p>Count GlobalState</p>
        <p>{count}</p>
      </div>
      <div className="flex gap-2 bg-slate-600 text-slate-100">
        <p>Count Zustand</p>
        <p>{countZS}</p>
      </div>
      <div className="flex gap-2 bg-slate-600 text-slate-100">
        <p>Count Redux</p>
        <p>{countRX}</p>
      </div>
    </>
  );
};

export default Recheiver;
