import type { SentenceItem } from "../../features/reader/types";

export const voegelChapters = [
  {
    id: "rotkehlchen",
    title: "Rotkehlchen",
    preview: "Wusstest du, dass Rotkehlchen unglaublich gerne singen?",
  },
  {
    id: "woodpecker",
    title: "Specht",
    preview: "Hast du schon einmal einen Specht...",
  },

  {
    id: "sparrow",
    title: "Spatz",
    preview: "Schau mal, der kleine Spatz nimmt ein Bad...",
  },
  {
    id: "stork",
    title: "Storch",
    preview: "Hast du gesehen, wie lang die Beine des Storchs sind?",
  },
  {
    id: "amsel",
    title: "Amsel",
    preview: "Die kleinen Amselküken haben Hunger...",
  },
] as const;

export type VoegelChapterId = (typeof voegelChapters)[number]["id"];

export async function loadVoegelChapter(
  chapterId: VoegelChapterId,
): Promise<SentenceItem[]> {
  switch (chapterId) {
    case "rotkehlchen": {
      const m = await import("./chapters/rotkehlchen");
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
      const m = await import("./chapters/amsel");
      return m.default;
    }

    default:
      return [];
  }
}
