"use client";
import React, { ReactElement, useRef } from "react";

function Page() {
  const ref = useRef<HTMLInputElement>(null);
  const submit = (e: React.BaseSyntheticEvent) => {
    console.log(e, e.target);
    if (ref.current) {
      console.log(ref.current.value);
    }

    e.preventDefault();
    // console.log(data, e);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <label>Name</label>
        <input type="text" name="name" ref={ref} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page;
