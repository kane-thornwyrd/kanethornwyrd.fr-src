// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";
import pkg from "../../../package.json";

const octokit = new Octokit({
  userAgent: `${pkg.name}/v${pkg.version}`,
  auth: process.env.GH_TOKEN,
});

export type RawProjectInformations = {
  id: number;
  name: string;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  homepage: string | null;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  open_issues: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
    node_id: string;
  };
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  watchers: number;
  default_branch: string;
};

export type ProjectInformations = {
  id: number
  logo_url: string;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  homepage: string;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  archived: boolean;
  open_issues_count: number;
  license_name: string;
  license_url: string | null;
  allow_forking: boolean;
  is_template: boolean;
  topics: string[];
  forks: number;
  watchers: number;
};

type Data = {
  login: string;
  projects: any;
};

const cleanupProject = ({
  id,
  name,
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
  license,
  allow_forking,
  is_template,
  topics,
  forks,
  watchers,
  default_branch,
}: RawProjectInformations): ProjectInformations => ({
  id,
  name,
  logo_url: `${html_url}/raw/${default_branch}/logo.png`,
  html_url,
  description: description || "",
  fork,
  created_at,
  updated_at,
  pushed_at,
  git_url,
  ssh_url,
  homepage: homepage || "",
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
  license_name: license?.name || '',
  license_url: license?.url || '',
  allow_forking,
  is_template,
  topics,
  forks,
  watchers,
});

const filterIsPublicProject = (p: RawProjectInformations): boolean =>
  !(p.archived || p.disabled || p.private || p.visibility !== "public");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  const { data: projectsRaw } = await octokit.rest.repos.listForUser({
    username: login,
    per_page: 100,
    page: 1
  });

  

  const projects: ProjectInformations[] = Array.from(projectsRaw)
    .filter((d) => filterIsPublicProject(d as RawProjectInformations))
    .map((d) => cleanupProject(d as RawProjectInformations));

  res.status(200).json({ login, projects });
}
