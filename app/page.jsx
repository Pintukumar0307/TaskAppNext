import React, { Suspense } from "react";
import Form from "./addTodoForm";
import Todos from "./todos";
import "../style/home.css";


const Page = async () => {
  return (
    <div className="home">
      <div className="addTask">
         <Form />
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default Page;
