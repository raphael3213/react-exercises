"use client";
import ToDo from "@/components/ToDo";
import React, { useRef, useState } from "react";

function Page() {
  const [list, setList] = useState<{
    [id: string]: { value: string; edit: boolean };
  }>({});

  const [id, setId] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);

  const listSetterChild = (id: string, value: string) => {
    setList((list) => {
      const result = { ...list };
      result[id] = { value: value, edit: false };
      return result;
    });
  };

  const addToDo = () => {
    if (ref.current?.value && ref.current.value !== "") {
      setList((list) => {
        if (ref.current === null) return list;
        const result = { ...list };
        result[id] = { value: ref.current.value, edit: false };
        return result;
      });

      setId((id) => id + 1);
      ref.current.value = "";
    }
  };
  return (
    <div>
      <h1>To Do List</h1>

      <div>
        {Object.keys(list).map((key) => (
          <ToDo
            key={key}
            value={list[key].value}
            id={key}
            handleUpdate={listSetterChild}
          />
        ))}
      </div>
      <div>
        <input type="text" ref={ref} />
        <button onClick={() => addToDo()}>Add</button>
      </div>
    </div>
  );
}

export default Page;
