import { Heart, LayoutGrid, Search, ShoppingCart } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="bg-transparent text-white p-4 flex justify-between items-center sticky top-0 z-50">
        {/* <!-- Left Section --> */}
        <div className="flex items-center">
          <span className=" text-black text-lg font-bold ml-10 text-[20px]">
            EXPANSION BIM
          </span>
        </div>

        {/* <!-- Center Section --> */}
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none shadow ">
              <h2 className=" flex gap-2 bg-black text-[15px] p-1.5 rounded-full px-6 ">
                <LayoutGrid className="h-5 w-5" />
                Category
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>All Properties</DropdownMenuItem>
              <DropdownMenuItem>3D Models</DropdownMenuItem>
              <DropdownMenuItem>Real Time X</DropdownMenuItem>
              <DropdownMenuItem>Samples</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className=" md:flex gap-3  items-center border rounded-full p-2 px-5 hidden ">
            <Search className="text-black h-5 w-5" />
            <input
              type="text"
              placeholder="Search Everything..."
              className="outline-none text-black w-full"
            />
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex ">
          <div className="flex items-center   mr-10">
            <button className="text-black  focus:outline-none text-[14px] mr-16">
              <Heart className="w-5 h-5 ml-3" />
              Wishlist
            </button>
            <button className="text-black  focus:outline-none text-[14px] mr-10">
              <ShoppingCart className="w-5 h-5 " />
              Cart
            </button>
          </div>
          <button className="text-white bg-black hover:bg-green-800 px-4 py-2 rounded-md focus:outline-none text-[14px] mr-10 ">
            SignUp / LogIn
          </button>
        </div>
      </div>
    </div>
  );
};
