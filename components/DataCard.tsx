import React from "react";

type ValueParam = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

function isValidKey(value: ValueParam, key: string): key is keyof ValueParam {
  return key in value;
}

function DataCard({ value: value }: { value: ValueParam }) {
  return (
    <div className="border-solid border-2 border-gray-950 p-3">
      {Object.keys(value).map((key) => (
        <div key={key}>
          {isValidKey(value, key) ? (
            <div className="flex items-center justify-between">
              <p>{key}</p>
              <div className="w-64 whitespace-normal">
                <p className=" text-right">{value[key]}</p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default DataCard;
