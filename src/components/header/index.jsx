import { useState } from "react";
import logo from "../../assets/svg/logo.svg";
import menu from "../../assets/svg/menu.svg";
import close from "../../assets/svg/close.svg";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-black text-white w-full sticky top-0 z-50">
      <div className="max-w-12xl py-4 px-10 w-full m-auto flex justify-between flex-row overflow-hidden max-lg:px-5 ">
        <div className="flex justify-center items-center">
          <img
            onClick={() => onNavigate("/")}
            src={logo}
            className="cursor-pointer max-lg:w-40 select-none"
          />
        </div>
        <div className="max-md:hidden">
          <ul className="list-none flex flex-row gap-10 max-xl:gap-2 justify-center items-center">
            <li className="p-3 max-lg:px-1 active:bg-[#4f4f4fa6] hover:bg-[#4f4f4f6e] cursor-pointer rounded-md select-none">
              <span>INTRODUCTION</span>
            </li>
            <li className="p-3 max-lg:px-1 active:bg-[#4f4f4fa6] hover:bg-[#4f4f4f6e] cursor-pointer rounded-md select-none">
              <span>SOLUTION</span>
            </li>
            <li className="p-3 max-lg:px-1 active:bg-[#4f4f4fa6] hover:bg-[#4f4f4f6e] cursor-pointer rounded-md select-none">
              <span>RATE PLAN</span>
            </li>
            <li>
              <div className="h-5 border-l-2 border-white"></div>
            </li>
            <li
              onClick={() => onNavigate("/login")}
              className="p-3 max-lg:px-1 active:bg-[#4f4f4fa6] hover:bg-[#4f4f4f6e] cursor-pointer rounded-md select-none"
            >
              <span>LOGIN</span>
            </li>
            <li className="p-3 max-lg:px-1 active:bg-[#4f4f4fa6] hover:bg-[#4f4f4f6e] cursor-pointer rounded-md select-none">
              <span>APPLY FOR FREE USE</span>
            </li>
          </ul>
        </div>
        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="bg-transparent active:bg-slate-700 p-2 hover:bg-slate-800"
          >
            <img
              src={isMenuOpen ? close : menu}
              className="cursor-pointer size-6"
            />
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 mt-2 bottom-0 left-0 right-0 w-dvw h-dvh bg-white py-2 no-doc-scroll">
              <ul className="list-none flex flex-col gap-10 max-xl:gap-2 justify-center items-start text-black px-2">
                <li className="p-3 active:bg-[#4f4f4f4c] hover:bg-[#4f4f4f25] cursor-pointer rounded-md select-none w-full">
                  <span>INTRODUCTION</span>
                </li>
                <li className="p-3 active:bg-[#4f4f4f4c] hover:bg-[#4f4f4f25] cursor-pointer rounded-md select-none w-full">
                  <span>SOLUTION</span>
                </li>
                <li className="p-3 active:bg-[#4f4f4f4c] hover:bg-[#4f4f4f25] cursor-pointer rounded-md select-none w-full">
                  <span>RATE PLAN</span>
                </li>
                <li className="w-full px-2">
                  <div className="border-t-2 border-slate-100"></div>
                </li>
                <li
                  onClick={() => onNavigate("/login")}
                  className="p-3 active:bg-[#4f4f4f4c] hover:bg-[#4f4f4f25] cursor-pointer rounded-md select-none w-full"
                >
                  <span>LOGIN</span>
                </li>
                <li className="p-3 active:bg-[#4f4f4f4c] hover:bg-[#4f4f4f25] cursor-pointer rounded-md select-none w-full">
                  <span>APPLY FOR FREE USE</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
