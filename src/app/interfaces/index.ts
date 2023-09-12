interface ITutor {
  name: string;
}

interface ISoftwareTool {
  title: string | undefined;
}

export interface ICourse {
  readonly tutor: ITutor;
  readonly softwareTool: ISoftwareTool;
  readonly keyword: string;
  readonly title: string;
  readonly thumbnail: string;
  readonly difficulty: "easy" | "intermediate" | "advanced";
  readonly language: "english";
  readonly length: number;
  readonly introVideo: string;
  readonly introLength: number;
  readonly publishedAt: Date;
}
