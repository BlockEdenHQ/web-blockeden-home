export interface Root {
  data: Data;
}

export interface Data {
  projects: Project[];
}

export interface Project {
  id: string;
  name: string;
  introduction: string;
  website: string;
  twitter: string;
  marketCap: number;
  tokenSymbol: string;
  explorerUrl: string;
  mediumUrl: string;
  redditUrl: string;
  githubUrl: string;
  whitepaperUrl: string;
  tags: Tag[];
  chains: any[];
}

export interface Tag {
  id: string;
  name: string;
}
