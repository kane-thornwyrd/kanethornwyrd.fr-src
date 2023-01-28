import { titleDefault } from "@local/app/conf";
import Image from "next/image";
import React, {
  ChangeEventHandler,
  Children,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

export const SubBigMenu: FC<
  PropsWithChildren & {
    title: string;
    onSelect: MouseEventHandler<HTMLInputElement>;
    selected: boolean;
    classNames?: string;
  }
> = ({ title, onSelect, selected, classNames, children }) => {
  return (
    <li className={`toggleable flex items-center`}>
      <input
        type="radio"
        value="selected"
        name="menu-entry"
        id={`toggle-${title}`}
        className="toggle-input"
        checked={selected}
        onClick={onSelect}
        onChange={() => {
          /**NOOP to get rid of **stupid** warn*/
        }}
      />
      <label htmlFor={`toggle-${title}`} className={`z-0 block ${classNames}`}>
        {children}
      </label>
      <div
        role="toggle"
        className={[
          "z-50 mega-menu mb-16 shadow-2xl from-transparent",
          "backdrop-blur-md to-zinc-400 bg-gradient-to-bl shadow-2xl",
        ].join(" ")}
      >
        <h2
          className={[
            "bg-gradient-to-tr from-zinc-900 to-zinc-600 text-white",
            "p-6 font-black text-xl hover:text-red-800 top-0 drop-shadow-md",
          ].join(" ")}
          onClick={onSelect}
        >
          {title} ↑
          <div
            className="text-zinc-100 text-right font-bold text-shadow font-title inline-block float-right"
          >
            {titleDefault}
          </div>
        </h2>
        <div className="container mx-auto w-full flex flex-wrap justify-between mx-2 min-h-screen md:-mb-20">
          <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
            <h3 className="font-bold text-xl  text-bold mb-2">Heading 1</h3>
            <li>
              <a href="google.com" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
          </ul>
          <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
            <h3 className="font-bold text-xl  text-bold mb-2">Heading 2</h3>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
          </ul>
          <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
            <h3 className="font-bold text-xl  text-bold">Heading 3</h3>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
            <li>
              <a href="#" className="block p-3   ">
                Category One Sublink
              </a>
            </li>
          </ul>
          <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
            <h3 className="font-bold text-xl  text-bold mb-2">Heading 4</h3>
            <li className="pt-3">
              <Image
                src="https://dummyimage.com/205x172"
                alt=""
                width={205}
                height={172}
              />
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
