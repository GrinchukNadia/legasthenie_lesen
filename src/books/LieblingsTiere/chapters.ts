import type { SentenceItem } from "../../features/reader/types";

export const lieblingsTiereChapters = [
  {
    id: "mantis",
    title: "Mantis",
    preview: "Der Gottesanbeter ist ein faszinierendes Insekt...",
  },
  {
    id: "woodpecker",
    title: "Specht",
    preview: "...",
  },

  {
    id: "sparrow",
    title: "Spatz",
    preview: "...",
  },
  {
    id: "stork",
    title: "Storch",
    preview: "...",
  },
  {
    id: "amsel",
    title: "Amsel",
    preview: "...",
  },
] as const;

export type lieblingsTiereId = (typeof lieblingsTiereChapters)[number]["id"];

export async function loadLieblingsTiereChapter(
  chapterId: lieblingsTiereId,
): Promise<SentenceItem[]> {
  switch (chapterId) {
    case "mantis": {
      const m = await import("./chapters/mantis");
      return m.default;
    }

    case "woodpecker": {
      const m = await import("./chapters/woodpecker");
      return m.default;
    }
    case "sparrow": {
      const m = await import("./chapters/sparrow");
      return m.default;
    }
    case "stork": {
      const m = await import("./chapters/stork");
      return m.default;
    }
    case "amsel": {
      const m = await import("./chapters/mantis");
      return m.default;
    }

    default:
      return [];
  }
}
