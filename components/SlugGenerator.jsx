"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import slugify from "ez-slugify";
import { useState } from "react";

const SlugGenerator = () => {
  const [textValue, setTextValue] = useState("");

  const handleSlugify = () => {
    if (typeof textValue !== "string" || !textValue.trim()) {
      return;
    }

    return slugify(textValue);
  };

  return (
    <>
      <label
        className="mx-auto relative bg-white min-w-sm md:w-1/2 max-w-7xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Paste Your String to Generate Slug"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button className="w-full md:w-auto px-6 py-3 bg-black hover:bg-opacity-85 border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
          <div className="flex items-center transition-all opacity-1 valid:">
            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
              Slugify
            </span>
          </div>
        </button>
      </label>

      <div
        className={
          "mt-8 mx-auto relative bg-white bg-opacity-100 min-w-sm md:w-1/2 max-w-7xl flex flex-col md:flex-row items-center justify-between border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300 transition-opacity duration-300 ease-in-out" +
          (textValue === "" ? " opacity-0" : " opacity-100")
        }
      >
        <p className="px-6 py-2 w-full rounded-md flex-1 outline-none">
          {handleSlugify()}
        </p>

        <button className="w-full md:w-auto px-6 py-3 bg-black hover:bg-opacity-85 border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
          <span>
            <DocumentDuplicateIcon className="h-5 w-5" />
          </span>
        </button>
      </div>
    </>
  );
};

export default SlugGenerator;
