"use client";
import React, { MouseEventHandler, useCallback, useState } from "react";

import { SubBigMenu } from "./SubBigMenu";
import styles from "./BigMenu.module.scss";
import { TileButton } from "../atoms/TileButton";
import { titleDefault } from "@local/app/conf";

const bigNavButtonClassnames = [
  "w-28 h-28 text-xl font-black p-3 block place-self-center p-0 m-0",
].join(" ");

export const BigMenu = () => {
  const [selected, setSelected] = useState<string>("");

  const onSelect = useCallback(
    (me: string): MouseEventHandler<HTMLInputElement> =>
      (event: any) => {
        if (selected === me) {
          setSelected("");
        } else {
          setSelected(me);
        }
      },
    [selected]
  );

  return (
    <nav className="relative z-50">
      <div className="mx-auto flex flex-col justify-between">
        <div
          className={`relative block p-4 text-zinc-100 text-center bg-gradient-to-b 
        from-zinc-100 to-transparent backdrop-blur-sm font-bold text-3xl md:text-7xl text-shadow
        font-title
        `}
        >
          {titleDefault}
        </div>
        <input
          className="hidden"
          type="radio"
          defaultChecked={selected === ""}
          onClick={onSelect("")}
        />
        <ul
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 place-items-center w-fit m-auto`}
        >
          <SubBigMenu
            title="Code Projects"
            onSelect={onSelect("Code Projects")}
            selected={selected === "Code Projects"}
            classNames={bigNavButtonClassnames}
          >
            <TileButton
              text={["Code","Projects"]}
              dimensions={[112, 112]}
              hoverClass="hover:fill-blue-700"
            />
          </SubBigMenu>
          <SubBigMenu
            title="Blog"
            onSelect={onSelect("Blog")}
            selected={selected === "Blog"}
            classNames={bigNavButtonClassnames}
          >
            <TileButton
              text="Blog"
              dimensions={[112, 112]}
              hoverClass="hover:fill-emerald-700"
            />
          </SubBigMenu>
          <SubBigMenu
            title="Portfolio"
            onSelect={onSelect("Portfolio")}
            selected={selected === "Portfolio"}
            classNames={bigNavButtonClassnames}
          >
            <TileButton
              text="Portfolio"
              dimensions={[112, 112]}
              hoverClass="hover:fill-amber-700"
            />
          </SubBigMenu>
          <SubBigMenu
            title="Contact"
            onSelect={onSelect("Contact")}
            selected={selected === "Contact"}
            classNames={bigNavButtonClassnames}
          >
            <TileButton
              text="Contact"
              dimensions={[112, 112]}
              hoverClass="hover:fill-lime-700"
            />
          </SubBigMenu>
        </ul>
      </div>
    </nav>
  );
};
