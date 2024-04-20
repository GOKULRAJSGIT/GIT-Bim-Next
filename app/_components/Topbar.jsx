import { ChevronDown } from "lucide-react";
import React from "react";

export const Topbar = () => {
  return (
    <div id="top">
      <div className="relative bg-black h-10 text-white p-4 flex justify-between items-center">
        <button className="  hover:text-gray-300 ml-10 text-[14px]">
          Publish Your Products
        </button>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <button className="flex items-center mr-3 hover:text-gray-300 text-[14px]">
              Language
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {/* <div className="absolute top-full left-0 mt-2 bg-black text-white shadow-md rounded">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                English
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Spanish
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                French
              </a>
            </div> */}
          </div>

          <div className="relative">
            <button className="flex items-center mr-10 hover:text-gray-300 text-[14px]">
              Country
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {/* <div className="absolute top-full left-0 mt-2 bg-black text-white shadow-md rounded">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                UK
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Canada
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
