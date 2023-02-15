"use client";
import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon";

import { titleDefault } from "@local/app/conf";
import { ProjectList } from "./ProjectList";
import { TileButton } from "../atoms/TileButton";

export const PersonalCodeProjectsSection: FC<
  PropsWithChildren & {
    onSelect: MouseEventHandler<HTMLInputElement>;
    selected: boolean;
    classNames?: string;
  }
> = ({ onSelect, selected, classNames, children }) => {
  const [data, setData] = useState({ projects: [] });
  const [isLoading, setLoading] = useState(false);



  const title = "Personal Code Projects";

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
        <TileButton
          text={["Personal", "Code", "Projects"]}
          dimensions={[96, 112]}
          backgroundTouchColor="#0891b2"
        />
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
        <div className="container mx-auto w-full flex flex-wrap justify-between">
          <div className="px-4 w-full border-gray-600 pb-6 pt-6 lg:pt-12">
            <h3 className="font-bold text-xl text-bold mb-2">Projects</h3>
            <ProjectList />
          </div>
        </div>
      </div>
    </li>
  );
};
