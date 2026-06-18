import { useState } from "react";
import { Fragment } from "react";
const Read = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;

  const DeleteHandler = (id)=>
  {
    const filteredtodo = todo.filter(todo => todo.id != id);
    setTodo(filteredtodo);
  }
 const renderTodo = todo.map((todo) => {
  return (
    <li
      key={todo.id}
      className="flex justify-between items-center py-2 border-b border-gray-600"
    >
      <span>{todo.title}</span>

      <span
        onClick={() => DeleteHandler(todo.id)}
        className="text-red-400 cursor-pointer hover:text-red-600 transition"
      >
        Delete
      </span>
    </li>
  );
});


  return (
    <div className="w-full lg:w-2/5 p-5 rounded-md flex flex-col bg-[#89D7B7]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin font-bold text-[#7288AE]"><span className="text-[#111844]">Pending</span> Todos</h1>
      <ol className="list-disc pl-6 px-7 m-4 bg-[#1A312C] text-[#EAE0CF] text-lg rounded-lg max-h-[400px] overflow-y-auto">{renderTodo}</ol>
    </div>
  );
};

export default Read;
