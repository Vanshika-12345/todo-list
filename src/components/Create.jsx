import { useState } from "react";
import { nanoid } from "nanoid";
import { Fragment } from "react";

const Create = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;
  const [title, settitle] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    const copytodos = [...todo];
    copytodos.push(newtodo);
    setTodo(copytodos);
    settitle("");
  };
  return (
    <div className="border-transparent w-full lg:w-3/5 p-10 text-center bg-[#4B5694] rounded-md">
      <h1 className="text-5xl font-thin font-bold text-[#EAE0CF]">Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          className="w-full max-w-md mx-auto mt-10 mb-10 border-b px-4 py-3 rounded-sm text-lg font-semibold text-center uppercase"
          onChange={(e) => settitle(e.target.value)}
          type="text"
          value={title}
          placeholder="title"
        />
        <br />
        <button
        className="border-none px-12 py-2 bg-[#EAE0CF] text-[#111844] rounded-lg shadow-md hover:scale-105 cursor-pointer"
        >Create Task</button>
      </form>
    </div>
  );
};

export default Create;
