import { ProjectInformations } from "@local/pages/api/projects";
import { FC, PropsWithoutRef, ReactElement } from "react";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";

dayjs.extend(isLeapYear);
dayjs.extend(relativeTime);
dayjs.locale("fr");

import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ProjectTileProps = {
  project: ProjectInformations;
};

export const ProjectTile: FC<
  PropsWithoutRef<ProjectTileProps> & { className: string }
> = ({
  className,
  project: {
    id,
    name,
    logo_url,
    html_url,
    description,
    fork,
    created_at,
    updated_at,
    pushed_at,
    git_url,
    ssh_url,
    homepage,
    language,
    has_issues,
    has_projects,
    has_downloads,
    has_wiki,
    has_pages,
    has_discussions,
    forks_count,
    archived,
    open_issues_count,
    license_name,
    license_url,
    allow_forking,
    is_template,
    topics,
    forks,
    watchers,
  },
}): ReactElement => {
  return (
    <div className={`rounded-sm border p-5 shadow-md bg-white ${className}`}>
      <div className="flex flex-col border-b pb-3">
        <div className="flex flex-grow">
          <div
            style={{
              background: `no-repeat center/contain url('${logo_url}')`,
            }}
            className="h-8 w-8 mr-1 rounded-full"
          ></div>
          <div className="text-lg font-bold text-slate-700 md:max-w-md overflow-hidden text-ellipsis">
            {name}
          </div>
        </div>
        <div className="flex flex-col flex-wrap space-y-1 mt-1">
          <div className="text-xs text-zinc-500 flex justify-between">
            {[
              [`Created: `, created_at],
              [`Updated: `, updated_at],
              [`Last push: `, pushed_at],
            ].map((v, i) => (
              <div key={`${v}-${i}`}>
                <div className="opacity-25">{v[0]}</div>
                <div className="text-right text-ellipsis max-w-xs">
                  {dayjs(v[1]).from(dayjs())}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 mb-6">
        <div className="flex flex-wrap justify-start">
          {topics.map((v, i) => (
            <p key={`${v}-${i}`} className="m-0 px-3 text-xs font-semibold">
              {v}
            </p>
          ))}
        </div>
        <div className="text-sm text-neutral-600">{description}</div>
      </div>

      <div>
        <div className="flex items-center justify-between text-slate-500">
          <div className="flex space-x-4 md:space-x-8">
            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>125</span>
            </div>
            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <StarIcon />
              </svg>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
