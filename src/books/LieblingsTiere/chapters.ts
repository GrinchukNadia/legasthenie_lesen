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
    id: "garnele",
    title: "Garnele",
    preview: "Die Garnele lebt im Meer...",
  },
  {
    id: "papagei",
    title: "Papagei",
    preview: "Der Papagei ist ein bunter Vogel...",
  },
  {
    id: "ratte",
    title: "Ratte",
    preview: "Die Ratte ist ein kleines, kluges...",
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
    case "garnele": {
      const m = await import("./chapters/garnele");
      return m.default;
    }
    case "papagei": {
      const m = await import("./chapters/papagei");
      return m.default;
    }
    case "ratte": {
      const m = await import("./chapters/ratte");
      return m.default;
    }

    default:
      return [];
  }
}
