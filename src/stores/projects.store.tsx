import { ProjectInformations } from "@local/pages/api/projects";
import { arrFn, funCsole } from "@local/utils";
import React, { FC, useEffect } from "react";

type Action =
  | { type: "addProject"; data: ProjectInformations }
  | { type: "addProjects"; data: ProjectInformations[] }
  | { type: "setProjects"; data: ProjectInformations[] };

type Dispatch = (action: Action) => void;
type State = { projects: ProjectInformations[] };
type ProjectProviderProps = { children: React.ReactNode };

const ProjectStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const projectsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addProject": {
      return { projects: arrFn.push(state.projects)(action.data) };
    }
    case "addProjects": {
      return { projects: state.projects.concat(action.data) };
    }
    case "setProjects": {
      return { projects: action.data };
    }
  }
};

export const ProjectsProvider: FC<ProjectProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(projectsReducer, { projects: [] });
  const value = { state, dispatch };

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(({ projects: data }) => dispatch({ type: "setProjects", data }));
  }, []);

  return (
    <ProjectStateContext.Provider value={value}>
      {children}
    </ProjectStateContext.Provider>
  );
};

export const useProjects = () => {
  const context = React.useContext(ProjectStateContext) || {
    state: { projects: [] },
    dispatch: () => {},
  };
  return context;
};
