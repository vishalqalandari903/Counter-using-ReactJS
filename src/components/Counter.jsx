import { useEffect, useState } from "react";
import { counterStyles, colors } from "../styles";
import github from "../assets/github.png";
import { useSelector, useDispatch } from "react-redux";
import {
  increamentCount,
  decreamentCount,
  resetCount,
} from "../app/slices/counter";

export const Counter = () => {
  const [isDark, setIsDark] = useState(false);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  localStorage.setItem("count", JSON.stringify(counter));

  const actionButtons = [
    {
      id: 3,
      name: "increament",
      action: () => dispatch(increamentCount()),
      className: `increament ${counterStyles.backgroundButton}`,
      icon: <i className="fa-solid fa-plus"></i>,
    },
    {
      id: 1,
      name: "decreament",
      action: () => dispatch(decreamentCount()),
      className: `decreament ${counterStyles.backgroundButton}`,
      icon: <i className="fa-solid fa-minus"></i>,
    },
    {
      id: 2,
      name: "reset",
      action: () => dispatch(resetCount()),
      className: `reset ${counterStyles.borderButton}`,
      icon: <i className="fa fa-refresh" aria-hidden="true"></i>,
    },
  ];
  actionButtons.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="h-[90vh] dark:bg-transparent w-full flex justify-center items-center">
        <div className="relative flex justify-center">
          <div
            className={`counter_container dark:bg-[#181C37] w-[300px] h-[200px]  rounded-2xl flex justify-center items-center flex-col gap-2 shadow-md bg-blue-200 relative z-10`}
          >
            {/* <div className="bg-blue-200 absolute left-2 top-2 text-md rounded-lg overflow-hidden">
              <button
                className={`${counterStyles.borderButton} rounded-s-lg`}
                onClick={() => setIsDark(false)}
              >
                <i class="fa-regular fa-lightbulb"></i>
              </button>
              <button
                className={`${counterStyles.borderButton} rounded-e-lg`}
                onClick={() => setIsDark(true)}
              >
                <i class="fa-regular fa-moon"></i>
              </button>
            </div> */}
            <div className="absolute right-2 top-2 flex justify-end card-img_hover ">
              <div
                title="Github Repo"
                onClick={() =>
                  window.open(
                    "https://github.com/vishalqalandari903/Counter-using-ReactJS",
                    "_blank"
                  )
                }
                className="black-gradient bg-gradient-to-r from-0% from-gray-600 to-black to-80% w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
            <h1 className={`counter ${counterStyles.counterText}`}>
              {counter}
            </h1>
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
          <div
            className={`background_effect rounded-md w-[80%] h-[130%]  absolute bg-[#0086FF] -translate-y-[12%]`}
          ></div>
        </div>
      </div>
    </>
  );
};
