"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [multipleTasks, setMultipleTasks] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();

    setMultipleTasks([...multipleTasks, { task }]);
    setTask("");
    console.log(task);
  };

  const deleteHandler = (index) => {
    const duplicateTasks = [...multipleTasks];
    duplicateTasks.splice(index, 1);
    setMultipleTasks(duplicateTasks);
  };

  return (
    <div>
      <h1 className="text-center text-3xl  p-4 mb-10">ToDo 🌱</h1>

      <form onSubmit={submitHandler}>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter your task"
            required
            className="border-green-600 border-2 p-2 w-8/12 rounded-l-lg"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button className="bg-green-600 p-2 rounded-r-lg text-white font-bold">
            Add Task
          </button>
        </div>
      </form>
      <div className="text-center ">
        {multipleTasks.length === 0 ? (
          <p className="my-5 ">Add Tasks 🍁...</p>
        ) : (
          <ul>
            {multipleTasks.map((items, index) => {
              return (
                <div>
                  <li
                    key={index}
                    className="flex items-center justify-evenly  mt-5"
                  >
                    <h1 className="mr-5 mt-5">{items.task}</h1>
                    <button
                      className="bg-amber-500 text-white p-2 rounded"
                      onClick={() => {
                        deleteHandler(index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default page;
