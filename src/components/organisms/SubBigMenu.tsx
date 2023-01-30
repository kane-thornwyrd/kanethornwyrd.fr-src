import React, { FC, MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon";

import { titleDefault } from "@local/app/conf";

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
          "z-50 mega-menu shadow-2xl from-transparent",
          "backdrop-blur-md backdrop-grayscale to-zinc-400 bg-gradient-to-bl shadow-2xl",
        ].join(" ")}
      >
        <h2
          className={[
            "bg-gradient-to-tr from-zinc-900 to-zinc-600 text-white font-title sticky z-40",
            "px-6 py-1 font-black text-2xl hover:text-red-800 top-0 drop-shadow-md flex justify-between",
          ].join(" ")}
          onClick={onSelect}
        >
          <span>
            {titleDefault} - {title}
          </span>
          <XMarkIcon className="h-8 w-8" />
        </h2>
        <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
          <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
            <h3 className="font-bold text-xl  text-bold mb-2">Heading 1</h3>
            <li>
              <a href="http://google.com">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
          </ul>
          <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
            <h3 className="font-bold text-xl  text-bold mb-2">Heading 2</h3>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
          </ul>
          <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
            <h3 className="font-bold text-xl  text-bold">Heading 3</h3>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
            </li>
            <li>
              <a href="#">Category One Sublink</a>
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
          <ul className="px-4 w-full lg:w-1/2 border-gray-600 pb-6 pt-6 lg:pt-12">
            <h3 className="font-bold text-xl text-bold mb-2">Heading 4</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
              pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
              ornare sit amet, <a href="#">wisi</a>. Aenean fermentum, elit eget tincidunt
              condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
              dui. Donec non enim in turpis pulvinar facilisis. Ut felis.
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
              dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
              metus
            </p>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </ul>
        </div>
      </div>
    </li>
  );
};
