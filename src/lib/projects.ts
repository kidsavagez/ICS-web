import projectsData from "@content/projects.json";

export type Project = {
  id: string;
  client: string;
  title: string;
  format: string;
  year: number;
  duration: string | null;
  description: string | null;
  source: {
    driveFileId: string;
    driveUrl: string;
    fileSize: string;
  };
  hosted: {
    youtubeId: string | null;
    youtubeUrl?: string;
    isShort?: boolean;
    poster: string | null;
  };
  featured: boolean;
  order: number;
};

const allProjects: Project[] = projectsData.projects as Project[];

export const projects = allProjects;

export const featuredProjects = allProjects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);
