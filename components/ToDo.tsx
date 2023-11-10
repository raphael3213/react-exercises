"use client";
import React, { useRef, useState } from "react";

type ToDoParams = {
  value: string;
  // edit: boolean;
};

function ToDo({
  value: value,
  handleUpdate: handleUpdate,
  id: id,
}: {
  value: string;
  handleUpdate: (id: string, value: string) => void;
  id: string;
}) {
  const [edit, setEdit] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2>{value}</h2>
      <div>
        {edit && (
          <div>
            <input
              type="text"
              ref={ref}
              placeholder="Add value to upate with"
            />
            <button
              onClick={() => {
                if (ref.current?.value) {
                  handleUpdate(id, ref.current.value);
                  setEdit(false);
                }
              }}
            >
              Update
            </button>
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setEdit((edit) => !edit)}>Edit</button>
      </div>
    </div>
  );
}

export default ToDo;
