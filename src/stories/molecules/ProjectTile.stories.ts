import type { Meta, StoryObj } from '@storybook/react';

import { ProjectTile } from "@local/components/molecules/ProjectTile";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ProjectTile> = {
  title: 'Molecules/ProjectTile',
  component: ProjectTile,
  tags: ['autodocs'],
  argTypes: {
    project: {
        control: 'object'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectTile>;

export const Desktop: Story = {
  args: {
    project: {
      id: 539684948,
      name: 'thedendrobatedoctor-blog',
      logo_url: 'https://github.com/kane-thornwyrd/thedendrobatedoctor-blog/raw/main/logo.png',
      html_url: 'https://github.com/kane-thornwyrd/thedendrobatedoctor-blog',
      description: "Nulla sed leo tempus, feugiat velit vel, rhoncus neque?",
      fork: false,
      created_at: '2022-09-21T21:06:41Z',
      updated_at: '2022-10-19T22:35:49Z',
      pushed_at: '2023-01-29T20:42:12Z',
      git_url: 'git://github.com/kane-thornwyrd/thedendrobatedoctor-blog.git',
      ssh_url: 'git@github.com:kane-thornwyrd/thedendrobatedoctor-blog.git',
      homepage: 'https://www.the-dendrobate-doctor.fr/',
      language: 'Nunjucks',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: false,
      has_pages: true,
      has_discussions: false,
      forks_count: 0,
      archived: false,
      open_issues_count: 0,
      license_name: 'MIT License',
      license_url: 'https://api.github.com/licenses/mit',
      allow_forking: true,
      is_template: false,
      topics: ["blog", "static", "11ty"],
      forks: 0,
      watchers: 0
    }
  },
};

// export const TouchDevice: Story = {
//   args: {
//     text: 'Test',
//     dimensions: [128, 128],
//     isTouchDevice: true,
//     backgroundTouchColor: '#94b979'
//   },
// };
