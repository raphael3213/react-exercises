"use client";
import React, { useRef, useState } from "react";

function Page() {
  const [list, setList] = useState<{
    [id: string]: { value: string; edit: boolean };
  }>({});
  const [id, setId] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const mapRef = useRef<Map<string, HTMLDivElement>>(new Map());

  const editRef = useRef<HTMLInputElement>(null);

  const getMap = () => {
    return mapRef.current;
  };
  const addToDoTask = () => {
    if (ref.current?.value) {
      const result = { ...list };
      result[id] = { value: ref.current.value, edit: false };
      setList(result);
      setId((id) => id + 1);
      ref.current.value = "";
    }
  };

  const updateToDoTask = (id: string) => {
    if (editRef.current?.value) {
      const result = { ...list };
      result[id] = { value: editRef.current?.value, edit: false };
      setList(result);
      editRef.current.value = "";
    }
  };

  const appendTextField = (id: string) => {
    const result = { ...list };
    result[id].edit = true;
    setList(result);
  };
  function EditField({ value: value, id: id }: { value: string; id: string }) {
    return (
      <div>
        <input type="text" ref={editRef} />
        <button onClick={() => updateToDoTask(id)}> Update</button>
      </div>
    );
  }
  return (
    <div className="mt-10 p-5">
      <div>
        <h1>To Do List : </h1>
        {Object.keys(list).map((key) => (
          <div
            key={key}
            ref={(node) => {
              if (node) mapRef.current.set(key, node);
            }}
          >
            <p>{list[key].value}</p>
            {list[key].edit && <EditField value={list[key].value} id={key} />}
            <button onClick={() => appendTextField(key)}> Edit </button>
          </div>
        ))}
      </div>
      <div>
        <input type="text" name="task" ref={ref} placeholder="Add To Do task" />
        <button
          onClick={() => {
            addToDoTask();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Page;
