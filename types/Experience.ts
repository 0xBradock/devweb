export interface IExperience {
  company: {
    name: string;
    city: string;
    country: string;
  };
  startDate: string;
  endDate: string;
  jobTitle: string;
  achievements: string[];
  progLanguages: string[];
  tools: string[];
  published: {
    resource: string;
    url: string;
  }[];
  repo: string;
}
