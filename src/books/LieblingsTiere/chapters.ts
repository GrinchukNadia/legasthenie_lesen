import type { SentenceItem } from "../../features/reader/types";

export const lieblingsTiereChapters = [
  {
    id: "mantis",
    title: "Mantis",
    preview: "Der Gottesanbeter ist ein faszinierendes Insekt...",
  },
  {
    id: "chamealeon",
    title: "Chamäleon",
    preview: "Der Chamäleon ist ein besonderes Reptil...",
  },

  {
    id: "hummel",
    title: "Hummel",
    preview: "Die Hummel ist ein kleines, rundes Insekt...",
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

    case "chamealeon": {
      const m = await import("./chapters/chamealeon");
      return m.default;
    }
    case "hummel": {
      const m = await import("./chapters/hummel");
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
