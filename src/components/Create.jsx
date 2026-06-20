// import { useState } from "react";
import { nanoid } from "nanoid";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";
const Create = (props) => {
  const todo = props.todo;
  const setTodo = props.setTodo;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const SubmitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    const copytodos = [...todo];
    copytodos.push(data);
    setTodo(copytodos);
    toast.success("Todo Created");
    reset();
  };
  return (
    <div className="border-transparent w-full lg:w-3/5 p-10 text-center bg-[#4B5694] rounded-md">
      <h1 className="text-5xl font-thin font-bold text-[#EAE0CF]">
        Create Tasks
      </h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
          {...register("title", { required: "Title is required" })}
          className="w-full max-w-md mx-auto mt-10 mb-2 border-b px-4 py-3 rounded-sm text-lg font-semibold text-center uppercase"
          type="text"
          placeholder="Title"
        />
        <br />
        {errors.title && (
          <small className="text-red-800">{errors.title.message}</small>
        )}
        <br />
        <button className="border-none px-12 py-2 mt-5 bg-[#EAE0CF] text-[#111844] rounded-lg shadow-md hover:scale-105 cursor-pointer">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Create;
