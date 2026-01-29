import type { SentenceItem } from "../../features/reader/types";

export const imOzeanChapters = [
  {
    id: "delfine",
    title: "Knattter! Knatter!",
    preview: "Schau mal, wie die Delfine...",
  },
  {
    id: "otter",
    title: "Rää! Rää!",
    preview: "Sieh nur, der klene Fischotter...",
  },
  {
    id: "pinguine",
    title: "Schnatter! Schnatter!",
    preview: "Entdeckst du die Pinguine...",
  },
  {
    id: "seagull",
    title: "Silbermöwe",
    preview: "Die ganze Silbermöwenbande...",
  },
  {
    id: "whale",
    title: "Buckelwal",
    preview: "Schau nur, der kleine Buckelwal...",
  },
] as const;

export type ImOzeanChapterId = (typeof imOzeanChapters)[number]["id"];

export async function loadImOzeanChapter(
  chapterId: ImOzeanChapterId,
): Promise<SentenceItem[]> {
  switch (chapterId) {
    case "delfine": {
      const m = await import("./chapters/delfine");
      return m.default;
    }
    case "otter": {
      const m = await import("./chapters/otter");
      return m.default;
    }
    case "pinguine": {
      const m = await import("./chapters/penguin");
      return m.default;
    }
    case "seagull": {
      const m = await import("./chapters/seagull");
      return m.default;
    }
    case "whale": {
      const m = await import("./chapters/whale");
      return m.default;
    }

    default:
      return [];
  }
}
