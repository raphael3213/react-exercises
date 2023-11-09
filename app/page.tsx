"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import DataCard from "./components/DataCard";

type ApiResponse = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
export default function Home() {
  const [data, setData] = useState([] as ApiResponse[]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => {
        if (response.ok) return response.json() as unknown as ApiResponse[];
        throw new Error(response.statusText);
      })
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, []);
  return (
    <main>
      {loader ? (
        <>Loading</>
      ) : (
        <>
          <div className="flex justify-center items-center   mt-5">
            <div className="w-50 flex p-4 border-solid border-2 border-black gap-2">
              <div className="">Search</div>
              <input
                type="text"
                className="focus:outline-none"
                onChange={(e) => {
                  console.log(e.target.value);
                  // setLoader(true);
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap p -4 gap-4 flex-1 mt-5">
            {/* {data.toString()} */}
            {data.map((element) =>
              element.email.includes(search) ? (
                <DataCard key={element.id} value={element} />
              ) : null
            )}
          </div>
        </>
      )}
    </main>
  );
}
