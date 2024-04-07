import { useEffect, useState } from "react";
import { counterStyles } from "../styles";
import github from "../assets/github.png";

function Counter() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  const increamentCount = () => setCount(count + 1);
  const decreamentCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  const actionButtons = [
    {
      id: 3,
      name: "increament",
      action: increamentCount,
      className: `increament ${counterStyles.backgroundButton}`,
      icon: <i className="fa-solid fa-plus"></i>,
    },
    {
      id: 1,
      name: "decreament",
      action: decreamentCount,
      className: `decreament ${counterStyles.backgroundButton}`,
      icon: <i className="fa-solid fa-minus"></i>,
    },
    {
      id: 2,
      name: "reset",
      action: resetCount,
      className: `reset ${counterStyles.borderButton}`,
      icon: <i className="fa fa-refresh" aria-hidden="true"></i>,
    },
  ];
  actionButtons.sort((a, b) => a.id - b.id);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <div className="relative flex justify-center">
        <div className="counter_container bg-[#181C37] w-[300px] h-[200px]  rounded-md flex justify-center items-center flex-col gap-2">
          <div className="absolute right-2 top-2 flex justify-end card-img_hover ">
            <div
              title="Github Repo"
              onClick={() =>
                window.open(
                  "https://github.com/vishalqalandari903/Counter-using-ReactJS",
                  "_blank"
                )
              }
              //   bg-[#0b7cdf] hover:bg-[#0289ff]
              className="black-gradient bg-gradient-to-r from-0% from-gray-600 to-black to-80% w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
          <h1 className={`counter ${counterStyles.counterText}`}>{count}</h1>
          <div className="actions flex gap-4 justify-center  text-center py-3 text-xl">
            {actionButtons.map((actionButton) => (
              <button
                key={actionButton.name}
                className={actionButton.className}
                onClick={actionButton.action}
              >
                {actionButton.icon}
              </button>
            ))}
          </div>
        </div>
        <div className="background_effect rounded-md w-[80%] h-[130%] -z-10 absolute bg-[#0086FF] -translate-y-[12%]"></div>
      </div>
    </>
  );
}

export default Counter;
