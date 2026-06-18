import React, { use, useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Study",
      isCompleted: false,
    },
  ]);

  return (
  <div className="min-h-screen bg-[#111844] flex flex-col lg:flex-row gap-6 p-4 md:p-8">
    <Create todo={todo} setTodo={setTodo} />
    <Read todo={todo} setTodo={setTodo} />
</div>
  );
};

export default App;
