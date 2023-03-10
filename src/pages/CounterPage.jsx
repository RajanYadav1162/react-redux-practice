import { useSelector, useDispatch } from "react-redux";

import { increase, decrease } from "../redux/counter";

const CounterPage = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const despatch = useDispatch();

  const handleIncrease = () => {
    despatch(increase());
  };

  const handleDecrease = () => {
    despatch(decrease());
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">
        Balance : <span className="text-orange-400">{count}</span>
      </h1>
      <div className="flex gap-x-3 justify-center mt-6">
        <button
          className="btn w-32 hover:border hover:border-blue-700"
          onClick={handleIncrease}
        >
          Deposit
        </button>
        <button
          className="btn w-32  hover:border hover:border-blue-700"
          onClick={handleDecrease}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
