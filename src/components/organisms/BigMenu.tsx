"use client";
import React, { MouseEventHandler, useCallback, useState } from "react";

import { SubBigMenu } from "./SubBigMenu";
import styles from "./BigMenu.module.scss";
import { TileButton } from "@local/components/atoms/TileButton";
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
            title="Portfolio"
            onSelect={onSelect("Portfolio")}
            selected={selected === "Portfolio"}
            classNames={bigNavButtonClassnames}
          >
            <TileButton
              text="Portfolio"
              dimensions={[96, 112]}
              backgroundTouchColor="#b45309"
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
              dimensions={[96, 112]}
              backgroundTouchColor="#047857"
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
              dimensions={[96, 112]}
              backgroundTouchColor="#4d7c0f"
            />
          </SubBigMenu>
          <SubBigMenu
            title="Personal Code Projects"
            onSelect={onSelect("Personal Code Projects")}
            selected={selected === "Personal Code Projects"}
            classNames={bigNavButtonClassnames}
          >
            <TileButton
              text={["Personal", "Code", "Projects"]}
              dimensions={[96, 112]}
              backgroundTouchColor="#0891b2"
            />
          </SubBigMenu>
          <SubBigMenu
            title="Tools"
            onSelect={onSelect("Tools")}
            selected={selected === "Tools"}
            classNames={bigNavButtonClassnames}
          >
            <TileButton
              text="Tools"
              dimensions={[96, 112]}
              backgroundTouchColor="#4338ca"
            />
          </SubBigMenu>
        </ul>
      </div>
    </nav>
  );
};
