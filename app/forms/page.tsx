"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  type FormValues = {
    name: string;
  };
  const onSubmit = handleSubmit((data, e) => console.log(data, e));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input {...register("name", { required: "Name is required" })} />
          <p>
            {errors.name && errors.name.message && `${errors.name.message}`}
          </p>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page;
