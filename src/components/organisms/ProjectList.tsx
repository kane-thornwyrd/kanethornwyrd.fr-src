import { ProjectInformations } from "@local/pages/api/projects";
import { useProjects } from "@local/stores/projects.store";
import { FC } from "react";
import { ProjectTile } from "../molecules/ProjectTile";
import { groupBy } from "ramda";

const mapObject = (fn: (key: any, val: any) => any) => (o: object) => {
  const output = [];
  for (const [key, value] of Object.entries(o)) {
    output.push(fn(key, value));
  }
  return output;
};

const formatLanguageName = (s: string) => (s === "null" ? "Unspecified" : s);

export const ProjectList: FC<{}> = () => {
  const {
    state: { projects },
  } = useProjects();

  const projectsByLanguages = groupBy((p: ProjectInformations) => p.language)(
    projects
  );

  return (
    <>
      <div>
        <h2
          id="top"
          className={
            `font-bold text-lg text-bold mt-3 mb-2 bg-gradient-to-r ` +
            `from-zinc-300 to-transparent rounded-sm pl-3`
          }
        >
          Languages:
        </h2>
        <ul className="flex flex-wrap flex-row justify-between md:justify-center">
          {Object.keys(projectsByLanguages)
            .sort(
              (a, b) => {
                console.log(projectsByLanguages[a]);
                
                return projectsByLanguages[b].length - projectsByLanguages[a].length
              }
            )
            // .sort(
            //   (a, b) =>
            //     projectsByLanguages[b].length - projectsByLanguages[a].length
            // )
            .map((l) => (
              <li key={`language-link-${l}`} className="mx-1 my-2">
                <a href={`#language-${formatLanguageName(l)}`} onClick={(e) => {
                  e.preventDefault();
                  console.log(window.document.getElementById(`language-${formatLanguageName(l)}`)?.offsetTop);
                  
                  //@ts-ignore
                  scrollTo({behavior:"smooth", top: window.document.getElementById(`language-${formatLanguageName(l)}`).offsetTop})
                }}>
                  {formatLanguageName(l)}{" "}
                  <span className="opacity-50">
                    ({projectsByLanguages[l].length})
                  </span>
                </a>
              </li>
            ))}
        </ul>
      </div>
      {mapObject((l: string, projects: ProjectInformations[]) => (
        <>
          <h3
            className={
              `font-bold text-xs text-bold mt-3 mb-2` +
              ` rounded-sm pl-3 bg-stripped mx-1`
            }
            id={`language-${l}`}
          >
            {formatLanguageName(l)}
          </h3>
          <div className="flex flex-row flex-wrap w-full md:grid-cols-2 xl:grid-cols-3">
            {projects.map((v: ProjectInformations) => (
              <div key={`${v.name}-${v.id}`} className={
                `flex flex-row justify-items-stretch items-stretch w-full md:w-1/2 xl:w-1/3 md:justify-center box-border p-1`}>
                <ProjectTile
                  project={v}
                  className="shadow-lg drop-shadow-lg w-full"
                />
                <div className="md:hidden float-right h-full w-1/6 border-zinc-700 opacity-20 text-center font-bold bg-stripped bg-scroll"></div>
              </div>
            ))}
          </div>
        </>
      ))(projectsByLanguages)}
    </>
  );
};
